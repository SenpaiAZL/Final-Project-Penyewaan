describe("TambahAlat Component Tests", () => {
    beforeEach(() => {
      cy.intercept("GET", "/api/kategori", {
        statusCode: 200,
        body: {
          data: [
            { kategori_id: 1, kategori_nama: "Kategori A" },
            { kategori_id: 2, kategori_nama: "Kategori B" },
          ],
        },
      }).as("fetchKategori");
  
      cy.intercept("GET", "/api/alat", {
        statusCode: 200,
        body: {
          data: [
            {
              alat_id: 1,
              alat_nama: "Alat A",
              alat_deskripsi: "Deskripsi Alat A",
              alat_hargaperhari: 100000,
              alat_stok: 5,
              alat_kategori_id: 1,
            },
            {
              alat_id: 2,
              alat_nama: "Alat B",
              alat_deskripsi: "Deskripsi Alat B",
              alat_hargaperhari: 200000,
              alat_stok: 10,
              alat_kategori_id: 2,
            },
          ],
        },
      }).as("fetchAlat");
  
      // Visit halaman TambahAlat
      cy.visit("/admin/Alat");
      cy.wait("@fetchKategori"); 
      cy.wait("@fetchAlat");
    });
  
    it("should allow typing in the form fields", () => {
      // Ketik nama alat
      cy.get('input[name="alat_nama"]').type("New Alat");
  
      // Ketik deskripsi alat
      cy.get('input[name="alat_deskripsi"]').type("Deskripsi New Alat");
  
      // Ketik harga per hari
      cy.get('input[name="alat_hargaperhari"]').type("50000");
  
      // Ketik stok
      cy.get('input[name="alat_stok"]').type("20");
  
      // Pilih kategori
      cy.get('select[name="alat_kategori_id"]').select("1"); 
    });
  
    it("should allow submitting the form", () => {
      // Isi form
      cy.get('input[name="alat_nama"]').type("New Alat");
      cy.get('input[name="alat_deskripsi"]').type("Deskripsi New Alat");
      cy.get('input[name="alat_hargaperhari"]').type("50000");
      cy.get('input[name="alat_stok"]').type("20");
      cy.get('select[name="alat_kategori_id"]').select("1"); 
  
      // Submit form
      cy.get('button[type="submit"]').click();
    });
  
    it("should allow editing an alat", () => {
      // Klik tombol Edit pada alat pertama
      cy.contains("Edit").first().click();
  
      // Ubah nama alat
      cy.get('input[name="alat_nama"]').clear().type("Updated Alat");
  
      // Submit form
      cy.get('button[type="submit"]').click();
    });
  
    it("should allow deleting an alat", () => {
      // Klik tombol Delete pada alat pertama
      cy.contains("Delete").first().click();
    });
  });