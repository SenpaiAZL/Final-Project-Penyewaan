describe("Halaman Sign Up", () => {
    beforeEach(() => {
      cy.visit("/auth/SignUp"); 
    });
  
    it("Menampilkan pesan error jika semua field kosong", () => {
      cy.get("button[type='submit']").click();
  
      cy.contains("Please fill in all fields.").should("be.visible");
    });
  
    it("Menampilkan pesan error jika password tidak cocok", () => {
      cy.get("#name").type("John Doe");
      cy.get("#email").type("johndoe@example.com");
      cy.get("#password").type("password123");
      cy.get("#confirmPassword").type("wrongpassword");
  
      cy.get("button[type='submit']").click();
  
      cy.contains("Passwords do not match.").should("be.visible");
    });
  
  
    it("Pendaftaran berhasil dengan data yang benar", () => {
      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/auth/register").as("registerRequest");
  
      cy.get("#name").type("barulagi");
      cy.get("#email").type("capekguys@example.com");
      cy.get("#password").type("ngantuk");
      cy.get("#confirmPassword").type("ngantuk");
  
      cy.get("button[type='submit']").click();
      
      cy.url().should("include", "/auth/Login");
    });
  });