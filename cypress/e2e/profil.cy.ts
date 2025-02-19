/// <reference types="cypress" />

describe('Profile Page', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('/user/Profile'); // Ganti dengan URL halaman Profile Anda
    });
  
    it('should display the profile form and initial values', () => {
      // Verify that the form is visible
      cy.get('form').should('be.visible');
      cy.contains('h1', 'Profile Settings').should('be.visible');
  
      // Verify initial values
      cy.get('img[src="/default-profile.png"]').should('be.visible'); // Default profile picture
      cy.get('input[type="text"]').should('have.value', 'JohnDoe'); // Username
      cy.get('input[type="email"]').should('have.value', 'johndoe@example.com'); // Email
      cy.get('input[type="password"]').should('have.value', ''); // Password (empty)
    });
  
    it('should update the username and email successfully', () => {
      const updatedUsername = 'NewUsername';
      const updatedEmail = 'newuser@example.com';
  
      // Update the username field
      cy.get('input[type="text"]').clear().type(updatedUsername);
  
      // Update the email field
      cy.get('input[type="email"]').clear().type(updatedEmail);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify success alert
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Profile updated successfully!');
      });
  
      // Verify that the form fields reflect the updated values
      cy.get('input[type="text"]').should('have.value', updatedUsername);
      cy.get('input[type="email"]').should('have.value', updatedEmail);
    });
  
  
    it('should show error when submitting invalid email', () => {
      const invalidEmail = 'invalid-email';
  
      // Update the email field with an invalid email
      cy.get('input[type="email"]').clear().type(invalidEmail);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify that the form does not accept invalid email (if validation exists)
      cy.get('input[type="email"]:invalid').should('exist');
    });
  
    it('should reset the form after reloading the page', () => {
      const updatedUsername = 'ResetTest';
      const updatedEmail = 'reset@example.com';
  
      // Update the username and email fields
      cy.get('input[type="text"]').clear().type(updatedUsername);
      cy.get('input[type="email"]').clear().type(updatedEmail);
  
      // Reload the page
      cy.reload();
  
      // Verify that the form fields reset to their initial values
      cy.get('input[type="text"]').should('have.value', 'JohnDoe');
      cy.get('input[type="email"]').should('have.value', 'johndoe@example.com');
      cy.get('input[type="password"]').should('have.value', '');
      cy.get('img[src="/default-profile.png"]').should('be.visible');
    });
  });