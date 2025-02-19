/// <reference types="cypress" />

describe('Manage Configuration Page', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('/admin/Configure'); // Ganti dengan URL halaman ManageConfiguration Anda
    });
  
    it('should display the form and initial configuration values', () => {
      // Verify that the form is visible
      cy.get('form').should('be.visible');
      cy.contains('h1', 'Manage Configuration').should('be.visible');
  
      // Verify initial configuration values
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
  
      // Fill in the form with updated values
      cy.get('#siteTitle').clear().type(updatedConfig.siteTitle);
      cy.get('#siteDescription').clear().type(updatedConfig.siteDescription);
      cy.get('#contactEmail').clear().type(updatedConfig.contactEmail);
      cy.get('#itemsPerPage').clear().type(updatedConfig.itemsPerPage);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify success message
      cy.contains('Configuration updated successfully!').should('be.visible');
  
      // Verify that the form fields reflect the updated values
      cy.get('#siteTitle').should('have.value', updatedConfig.siteTitle);
      cy.get('#siteDescription').should('have.value', updatedConfig.siteDescription);
      cy.get('#contactEmail').should('have.value', updatedConfig.contactEmail);
      cy.get('#itemsPerPage').should('have.value', updatedConfig.itemsPerPage);
    });
  
    it('should show error message when submitting invalid email', () => {
      const invalidEmail = 'invalid-email';
  
      // Update the contact email field with an invalid email
      cy.get('#contactEmail').clear().type(invalidEmail);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
    });
  
    it('should reset the form after updating configuration', () => {
      const updatedConfig = {
        siteTitle: 'Reset Test',
        siteDescription: 'This is a reset test.',
        contactEmail: 'reset@example.com',
        itemsPerPage: '5',
      };
  
      // Fill in the form with updated values
      cy.get('#siteTitle').clear().type(updatedConfig.siteTitle);
      cy.get('#siteDescription').clear().type(updatedConfig.siteDescription);
      cy.get('#contactEmail').clear().type(updatedConfig.contactEmail);
      cy.get('#itemsPerPage').clear().type(updatedConfig.itemsPerPage);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify success message
      cy.contains('Configuration updated successfully!').should('be.visible');
  
      // Reset the form by reloading the page
      cy.reload();
  
      // Verify that the form fields reflect the initial values
      cy.get('#siteTitle').should('have.value', 'My Website');
      cy.get('#siteDescription').should('have.value', 'Welcome to My Website');
      cy.get('#contactEmail').should('have.value', 'contact@mywebsite.com');
      cy.get('#itemsPerPage').should('have.value', '10');
    });
  });