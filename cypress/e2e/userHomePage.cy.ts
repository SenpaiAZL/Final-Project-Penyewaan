describe("Halaman Home", () => {
    beforeEach(() => {
      // Buka halaman Home sebelum setiap test case
      cy.visit("/Home"); // Pastikan URL sesuai dengan routing Next.js
    });
  
    it("Menampilkan loading state saat halaman dimuat", () => {
      // Verifikasi bahwa teks "Loading..." muncul saat halaman sedang memuat
      cy.contains("Loading...").should("be.visible");
    });
  
    it("Menampilkan pesan error jika gagal memuat produk", () => {
      // Intercept API request untuk simulasi error
      cy.intercept("GET", "/api/alat", { statusCode: 500 }).as("fetchProducts");
  
      // Reload halaman untuk memicu API request
      cy.reload();
  
      // Tunggu API response
      cy.wait("@fetchProducts");
  
      // Verifikasi bahwa pesan error muncul
      cy.contains("Failed to load featured products.").should("be.visible");
    });
  
    it("Menampilkan carousel produk jika data berhasil dimuat", () => {
      // Intercept API request untuk simulasi data sukses
      cy.intercept("GET", "/api/alat", {
        statusCode: 200,
        body: {
          data: [
            { alat_id: 1, name: "Product 1", description: "Description 1" },
            { alat_id: 2, name: "Product 2", description: "Description 2" },
          ],
        },
      }).as("fetchProducts");
  
      // Reload halaman untuk memicu API request
      cy.reload();
  
      // Tunggu API response
      cy.wait("@fetchProducts");
  
      // Scroll ke bagian carousel
      cy.contains("Featured Products").scrollIntoView();
  
      // Verifikasi bahwa carousel muncul
      cy.get(".carousel").should("be.visible");
  
    });
  
    it("Mengarahkan pengguna ke halaman Product saat tombol 'Get Started' diklik", () => {
      // Scroll ke tombol 'Get Started'
      cy.contains("Get Started").scrollIntoView();
  
      // Klik tombol 'Get Started'
      cy.contains("Get Started").click();
  
      // Verifikasi bahwa pengguna diarahkan ke halaman Product
      cy.url().should("include", "/user/Product");
    });
  });