describe("Halaman Admin Login", () => {
    beforeEach(() => {
      // Buka halaman Admin Login sebelum setiap test case
      cy.visit("/auth/AdminLogin"); // Pastikan URL sesuai dengan routing Next.js
    });
  
    it("Menampilkan pesan error jika semua field kosong", () => {
      // Klik tombol login tanpa mengisi form
      cy.get("button[type='submit']").click();
  
      // Verifikasi bahwa pesan error muncul
      cy.contains("Please fill in all fields.").should("be.visible");
    });
  
    it("Login gagal dengan data salah", () => {
      // Intercept API request untuk simulasi login gagal
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/login", {
        statusCode: 401,
        body: { message: "Invalid credentials" },
      }).as("loginRequest");
  
      // Isi form dengan data yang salah
      cy.get("#username").type("wronguser");
      cy.get("#password").type("wrongpassword");
  
      // Klik tombol login
      cy.get("button[type='submit']").click();
  
      // Tunggu API response
      cy.wait("@loginRequest");
  
      // Verifikasi bahwa notifikasi gagal muncul
      cy.contains("Login failed. Please try again.").should("be.visible");
    });
  
    it("Login berhasil dengan data yang benar", () => {
      // Intercept API request untuk simulasi login sukses
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/login", {
        statusCode: 200,
        body: { accesstoken: "valid-admin-token" },
      }).as("loginRequest");
  
      // Isi form dengan data yang benar (ganti dengan kredensial valid)
      cy.get("#username").type("adminuser");
      cy.get("#password").type("adminpassword");
  
      // Klik tombol login
      cy.get("button[type='submit']").click();
  
      // Tunggu API response
      cy.wait("@loginRequest");
  
      // Verifikasi bahwa notifikasi sukses muncul
      cy.contains("Login successful! Redirecting...", { timeout: 5000 }).should("be.visible");
  
      // Verifikasi redirect ke halaman Admin Dashboard
      cy.url().should("include", "/admin/AdminDashboard");
    });
  
    it("Mengarahkan pengguna ke halaman Login saat tombol 'Back' diklik", () => {
      // Klik tombol 'Back'
      cy.get("button.fixed").click();
  
      // Verifikasi bahwa pengguna diarahkan ke halaman Login
      cy.url().should("include", "/auth/Login");
    });
  });