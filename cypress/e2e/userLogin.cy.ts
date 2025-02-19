describe("Halaman Login", () => {
    beforeEach(() => {
      cy.visit("/auth/Login");
    });
  
    it("Login berhasil dengan data yang benar", () => {

      cy.intercept("POST", "https://api-elektronik-finalproject.aran8276.site/api/auth/login").as("loginRequest");
  
      cy.get("#email").type("erlytazeva@gmail.com");
      cy.get("#password").type("1234");
      cy.get("button[type='submit']").click();
  
      cy.wait("@loginRequest");
  
      cy.url().should("include", "/Home");
    });
  });