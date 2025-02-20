/// <reference types="cypress" />

describe('Manage Configuration Page', () => {
    beforeEach(() => {
      cy.visit('/admin/Configure'); // Ganti dengan URL halaman ManageConfiguration Anda
    });
  
    it('Menampilkan formulir dan nilai konfigurasi awal', () => {
      cy.get('form').should('be.visible');
      cy.contains('h1', 'Manage Configuration').should('be.visible');
  
      cy.get('#siteTitle').should('have.value', 'My Website');
      cy.get('#siteDescription').should('have.value', 'Welcome to My Website');
      cy.get('#contactEmail').should('have.value', 'contact@mywebsite.com');
      cy.get('#itemsPerPage').should('have.value', '10');
    });
  
    it('should update the configuration successfully', () => {
      const updatedConfig = {
        siteTitle: 'Updated Website',
        siteDescription: 'This is an updated description.',
        contactEmail: 'updated@example.com',
        itemsPerPage: '20',
      };
  
      cy.get('#siteTitle').clear().type(updatedConfig.siteTitle);
      cy.get('#siteDescription').clear().type(updatedConfig.siteDescription);
      cy.get('#contactEmail').clear().type(updatedConfig.contactEmail);
      cy.get('#itemsPerPage').clear().type(updatedConfig.itemsPerPage);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Configuration updated successfully!').should('be.visible');
  
      cy.get('#siteTitle').should('have.value', updatedConfig.siteTitle);
      cy.get('#siteDescription').should('have.value', updatedConfig.siteDescription);
      cy.get('#contactEmail').should('have.value', updatedConfig.contactEmail);
      cy.get('#itemsPerPage').should('have.value', updatedConfig.itemsPerPage);
    });
  
    it('should show error message when submitting invalid email', () => {
      const invalidEmail = 'invalid-email';
  
      cy.get('#contactEmail').clear().type(invalidEmail);
  
      cy.get('button[type="submit"]').click();
  
    });
  
    it('should reset the form after updating configuration', () => {
      const updatedConfig = {
        siteTitle: 'Reset Test',
        siteDescription: 'This is a reset test.',
        contactEmail: 'reset@example.com',
        itemsPerPage: '5',
      };
  
      cy.get('#siteTitle').clear().type(updatedConfig.siteTitle);
      cy.get('#siteDescription').clear().type(updatedConfig.siteDescription);
      cy.get('#contactEmail').clear().type(updatedConfig.contactEmail);
      cy.get('#itemsPerPage').clear().type(updatedConfig.itemsPerPage);
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Configuration updated successfully!').should('be.visible');
  
      cy.reload();
  
      cy.get('#siteTitle').should('have.value', 'My Website');
      cy.get('#siteDescription').should('have.value', 'Welcome to My Website');
      cy.get('#contactEmail').should('have.value', 'contact@mywebsite.com');
      cy.get('#itemsPerPage').should('have.value', '10');
    });
  });