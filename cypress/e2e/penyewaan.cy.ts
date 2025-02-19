describe("ManagePenyewaan Component Tests", () => {
  beforeEach(() => {
    cy.visit("/admin/Penyewaan");
  });

  it("should allow typing in the form fields", () => {
    cy.get('input[name="name"]').type("Erlyta");
    cy.get('input[name="item"]').type("Komputer");
    cy.get('input[name="tanggalSewa"]').type("2023-04-08");
    cy.get('input[name="tanggalKembali"]').type("2023-04-11");
    cy.get('select[name="statusPembayaran"]').select("Lunas");
    cy.get('select[name="statusPengembalian"]').select("Belum Kembali");
    cy.get('input[name="totalHarga"]').type("100.000");
  });

  it("should allow submitting the form", () => {
    cy.get('input[name="name"]').type("Erlyta");
    cy.get('input[name="item"]').type("Komputer");
    cy.get('input[name="tanggalSewa"]').type("2023-04-08");
    cy.get('input[name="tanggalKembali"]').type("2023-04-11");
    cy.get('select[name="statusPembayaran"]').select("Lunas");
    cy.get('select[name="statusPengembalian"]').select("Belum Kembali");
    cy.get('input[name="totalHarga"]').type("100.000");

    cy.get('button[type="submit"]').click();
  });

  it("should allow editing a penyewaan", () => {
    cy.contains("Edit").first().click();

    cy.get('input[name="name"]').clear().type("Updated Name");
    cy.get('button[type="submit"]').click();
  });

  it("should allow deleting a penyewaan", () => {
    cy.contains("Delete").first().click();
  });
});