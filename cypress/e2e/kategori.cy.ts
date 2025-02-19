describe("ManageKategori Component Tests", () => {
    beforeEach(() => {
      // Mock data kategori (hanya untuk memastikan UI ada)
      cy.intercept("GET", "/api/kategori", {
        statusCode: 200,
        body: {
          data: [
            { kategori_id: 1, kategori_nama: "Category A" },
            { kategori_id: 2, kategori_nama: "Category B" },
          ],
        },
      }).as("fetchKategori");
  
      // Visit halaman ManageKategori
      cy.visit("/admin/Kategori");
      cy.wait("@fetchKategori"); // Pastikan data telah dimuat
    });
  
    it("should allow typing in the category name input field", () => {
      // Ketik nama kategori
      cy.get('input[name="kategori_nama"]').type("New Category");
      // Tidak ada verifikasi, hanya memastikan interaksi berjalan
    });
  
    it("should allow submitting the form", () => {
      // Ketik nama kategori
      cy.get('input[name="kategori_nama"]').type("New Category");
  
      // Submit form
      cy.get('button[type="submit"]').click();
      // Tidak ada verifikasi, hanya memastikan tombol dapat diklik
    });
  
    it("should allow editing a category", () => {
      // Klik tombol Edit pada kategori pertama
      cy.contains("Edit").first().click();
  
      // Ubah nama kategori
      cy.get('input[name="kategori_nama"]').clear().type("Updated Category");
  
      // Submit form
      cy.get('button[type="submit"]').click();
      // Tidak ada verifikasi, hanya memastikan tombol dapat diklik
    });
  
    it("should allow deleting a category", () => {
      // Klik tombol Delete pada kategori pertama
      cy.contains("Delete").first().click();
      // Tidak ada verifikasi, hanya memastikan tombol dapat diklik
    });
  });