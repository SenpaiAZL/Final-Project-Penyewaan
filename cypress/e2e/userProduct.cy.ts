describe("Halaman Product List", () => {
    beforeEach(() => {
      cy.visit("/user/Product"); 
    });
  
    it("Mengarahkan pengguna ke halaman Home saat tombol 'Voltify' diklik", () => {
      cy.contains("Voltify").click();
  
      cy.url().should("eq", "http://localhost:3000/"); 
    });
  
    it("Scroll ke bawah halaman hingga elemen terakhir terlihat", () => {
      cy.get("body").then(($body) => {
        if ($body.find(".grid > div:last-child").length > 0) {
          cy.get(".grid > div:last-child")
            .scrollIntoView()
            .should("be.visible");
        } else {
          cy.log("Elemen terakhir tidak ditemukan");
        }
      });
    });
  
    it("Mengarahkan pengguna ke halaman Contact saat tombol 'Contact' diklik", () => {
      cy.contains("Contact").click();
  
      cy.url().should("eq", "http://localhost:3000/user/contact"); // Sesuaikan dengan URL Contact Anda
    });
  });