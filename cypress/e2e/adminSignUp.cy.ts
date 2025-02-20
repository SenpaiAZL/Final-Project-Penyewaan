describe("Halaman Admin Signup", () => {
    beforeEach(() => {
      cy.visit("/auth/AdminRegister");
    });
  
    it("Menampilkan pesan error jika semua field kosong", () => {
      cy.get("button[type='submit']").click();
  
      cy.contains("Please fill in all fields.").should("be.visible");
    });
  
    it("Menampilkan pesan error jika password tidak cocok", () => {
      cy.get("#username").type("adminuser");
      cy.get("#password").type("password123");
      cy.get("#confirmPassword").type("wrongpassword");
  
      cy.get("button[type='submit']").click();
  
      cy.contains("Passwords do not match.").should("be.visible");
    });
  
    it("Pendaftaran gagal dengan data yang salah", () => {
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/register", {
        statusCode: 400,
        body: { message: "Username already exists" },
      }).as("registerRequest");
  
      cy.get("#username").type("existinguser");
      cy.get("#password").type("password123");
      cy.get("#confirmPassword").type("password123");
  
      cy.get("button[type='submit']").click();
  
      cy.wait("@registerRequest");
  
    });
  
    it("Pendaftaran berhasil dengan data yang benar", () => {
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/register", {
        statusCode: 200,
        body: { message: "Admin registered successfully" },
      }).as("registerRequest");
  
      cy.get("#username").type("newadminuser");
      cy.get("#password").type("correctpassword");
      cy.get("#confirmPassword").type("correctpassword");
  
      cy.get("button[type='submit']").click();
  
      cy.wait("@registerRequest");
  
      cy.contains("Registration successful! Redirecting to login...", { timeout: 5000 }).should("be.visible");
  
      cy.url().should("include", "/auth/AdminLogin");
    });
  
    it("Mengarahkan pengguna ke halaman Login saat link 'Login' diklik", () => {
      cy.contains("Login").click();
  
      cy.url().should("include", "/auth/AdminLogin");
    });
  });