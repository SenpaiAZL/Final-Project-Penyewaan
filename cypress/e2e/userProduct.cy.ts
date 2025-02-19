describe("Halaman Product List", () => {
    beforeEach(() => {
      // Buka halaman Product sebelum setiap test case
      cy.visit("/user/Product"); // Pastikan URL sesuai dengan routing Next.js
    });
  
    it("Mengarahkan pengguna ke halaman Home saat tombol 'Voltify' diklik", () => {
      // Klik tombol 'Voltify'
      cy.contains("Voltify").click();
  
      // Verifikasi bahwa pengguna diarahkan ke halaman Home
      cy.url().should("eq", "http://localhost:3000/"); // Sesuaikan dengan URL Home Anda
    });
  
    it("Scroll ke bawah halaman hingga elemen terakhir terlihat", () => {
      // Scroll ke elemen terakhir di halaman
      cy.get("body").then(($body) => {
        if ($body.find(".grid > div:last-child").length > 0) {
          cy.get(".grid > div:last-child")
            .scrollIntoView() // Scroll ke elemen terakhir
            .should("be.visible");
        } else {
          cy.log("Elemen terakhir tidak ditemukan");
        }
      });
    });
  
    it("Mengarahkan pengguna ke halaman Contact saat tombol 'Contact' diklik", () => {
      // Klik tombol 'Contact'
      cy.contains("Contact").click();
  
      // Verifikasi bahwa pengguna diarahkan ke halaman Contact
      cy.url().should("eq", "http://localhost:3000/user/contact"); // Sesuaikan dengan URL Contact Anda
    });
  });