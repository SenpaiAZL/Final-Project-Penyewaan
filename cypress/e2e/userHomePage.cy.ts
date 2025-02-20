describe("Halaman Home", () => {
    beforeEach(() => {
      cy.visit("/Home"); 
    });
  
    it("Menampilkan loading state saat halaman dimuat", () => {
      cy.contains("Loading...").should("be.visible");
    });
  
    it("Menampilkan pesan error jika gagal memuat produk", () => {
      cy.intercept("GET", "/api/alat", { statusCode: 500 }).as("fetchProducts");
  
      cy.reload();
  
      cy.wait("@fetchProducts");
  
      cy.contains("Failed to load featured products.").should("be.visible");
    });
  
    it("Menampilkan carousel produk jika data berhasil dimuat", () => {
      cy.intercept("GET", "/api/alat", {
        statusCode: 200,
        body: {
          data: [
            { alat_id: 1, name: "Product 1", description: "Description 1" },
            { alat_id: 2, name: "Product 2", description: "Description 2" },
          ],
        },
      }).as("fetchProducts");
  
      cy.reload();
  
      cy.wait("@fetchProducts");
  
      cy.contains("Featured Products").scrollIntoView();
  
      cy.get(".carousel").should("be.visible");
  
    });
  
    it("Mengarahkan pengguna ke halaman Product saat tombol 'Get Started' diklik", () => {
      cy.contains("Get Started").scrollIntoView();
  
      cy.contains("Get Started").click();
  
      cy.url().should("include", "/user/Product");
    });
  });