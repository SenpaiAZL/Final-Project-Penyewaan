describe("ManageKategori Component Tests", () => {
    beforeEach(() => {
      cy.intercept("GET", "/api/kategori", {
        statusCode: 200,
        body: {
          data: [
            { kategori_id: 1, kategori_nama: "Category A" },
            { kategori_id: 2, kategori_nama: "Category B" },
          ],
        },
      }).as("fetchKategori");
  
      cy.visit("/admin/Kategori");
      cy.wait("@fetchKategori"); 
    });
  
    it("Mengizinkan ngetik di kolom input nama kategori", () => {
      cy.get('input[name="kategori_nama"]').type("New Category");
    });
  
    it("Pengiriman Formulir", () => {
      cy.get('input[name="kategori_nama"]').type("New Category");
  
      cy.get('button[type="submit"]').click();
    });
  
    it("Edit Kategori", () => {
      cy.contains("Edit").first().click();
  
      cy.get('input[name="kategori_nama"]').clear().type("Updated Category");
  
      cy.get('button[type="submit"]').click();
    });
  
    it("Hapus Kategori", () => {
      cy.contains("Delete").first().click();
    });
  });