describe("Halaman Admin Signup", () => {
    beforeEach(() => {
      // Buka halaman Admin Signup sebelum setiap test case
      cy.visit("/auth/AdminRegister"); // Pastikan URL sesuai dengan routing Next.js
    });
  
    it("Menampilkan pesan error jika semua field kosong", () => {
      // Klik tombol Sign Up tanpa mengisi form
      cy.get("button[type='submit']").click();
  
      // Verifikasi bahwa pesan error muncul
      cy.contains("Please fill in all fields.").should("be.visible");
    });
  
    it("Menampilkan pesan error jika password tidak cocok", () => {
      // Isi form dengan password yang tidak cocok
      cy.get("#username").type("adminuser");
      cy.get("#password").type("password123");
      cy.get("#confirmPassword").type("wrongpassword");
  
      // Klik tombol Sign Up
      cy.get("button[type='submit']").click();
  
      // Verifikasi bahwa pesan error muncul
      cy.contains("Passwords do not match.").should("be.visible");
    });
  
    it("Pendaftaran gagal dengan data yang salah", () => {
      // Intercept API request untuk simulasi pendaftaran gagal
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/register", {
        statusCode: 400,
        body: { message: "Username already exists" },
      }).as("registerRequest");
  
      // Isi form dengan data yang salah
      cy.get("#username").type("existinguser");
      cy.get("#password").type("password123");
      cy.get("#confirmPassword").type("password123");
  
      // Klik tombol Sign Up
      cy.get("button[type='submit']").click();
  
      // Tunggu API response
      cy.wait("@registerRequest");
  
    });
  
    it("Pendaftaran berhasil dengan data yang benar", () => {
      // Intercept API request untuk simulasi pendaftaran sukses
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/register", {
        statusCode: 200,
        body: { message: "Admin registered successfully" },
      }).as("registerRequest");
  
      // Isi form dengan data yang benar (ganti dengan data valid)
      cy.get("#username").type("newadminuser");
      cy.get("#password").type("correctpassword");
      cy.get("#confirmPassword").type("correctpassword");
  
      // Klik tombol Sign Up
      cy.get("button[type='submit']").click();
  
      // Tunggu API response
      cy.wait("@registerRequest");
  
      // Verifikasi bahwa pesan sukses muncul
      cy.contains("Registration successful! Redirecting to login...", { timeout: 5000 }).should("be.visible");
  
      // Verifikasi redirect ke halaman Admin Login
      cy.url().should("include", "/auth/AdminLogin");
    });
  
    it("Mengarahkan pengguna ke halaman Login saat link 'Login' diklik", () => {
      // Klik link 'Login'
      cy.contains("Login").click();
  
      // Verifikasi bahwa pengguna diarahkan ke halaman Login
      cy.url().should("include", "/auth/AdminLogin");
    });
  });