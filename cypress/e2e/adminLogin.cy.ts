describe("Halaman Admin Login", () => {
    beforeEach(() => {

      cy.visit("/auth/AdminLogin"); 
    });
  
    it("Menampilkan pesan error jika semua field kosong", () => {
      cy.get("button[type='submit']").click();
  
      cy.contains("Please fill in all fiel  ds.").should("be.visible");
    });
  
    it("Login gagal dengan data salah", () => {
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/login", {
        statusCode: 401,
        body: { message: "Invalid credentials" },
      }).as("loginRequest");
  
      cy.get("#username").type("wronguser");
      cy.get("#password").type("wrongpassword");
  
      cy.get("button[type='submit']").click();
  
      cy.wait("@loginRequest");
  
      cy.contains("Login failed. Please try again.").should("be.visible");
    });
  
    it("Login berhasil dengan data yang benar", () => {
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/admin/login", {
        statusCode: 200,
        body: { accesstoken: "valid-admin-token" },
      }).as("loginRequest");
  
      cy.get("#username").type("adminuser");
      cy.get("#password").type("adminpassword");
  
      cy.get("button[type='submit']").click();
  
      cy.wait("@loginRequest");
  
      cy.contains("Login successful! Redirecting...", { timeout: 5000 }).should("be.visible");
  
      cy.url().should("include", "/admin/AdminDashboard");
    });
  
    it("Mengarahkan pengguna ke halaman Login saat tombol 'Back' diklik", () => {
      cy.get("button.fixed").click();
  
      cy.url().should("include", "/auth/Login");
    });
  });