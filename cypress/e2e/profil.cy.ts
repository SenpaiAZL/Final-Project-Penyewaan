/// <reference types="cypress" />

describe('Profile Page', () => {
    beforeEach(() => {
      cy.visit('/user/Profile'); 
    });
  
    it('menampilkan formulir profil dan nilai awal', () => {
      cy.get('form').should('be.visible');
      cy.contains('h1', 'Profile Settings').should('be.visible');
  
      cy.get('img[src="/default-profile.png"]').should('be.visible'); 
      cy.get('input[type="text"]').should('have.value', 'JohnDoe'); 
      cy.get('input[type="email"]').should('have.value', 'johndoe@example.com');
      cy.get('input[type="password"]').should('have.value', ''); 
    });
  
    it('Update username & email successfully', () => {
      const updatedUsername = 'NewUsername';
      const updatedEmail = 'newuser@example.com';
  
      cy.get('input[type="text"]').clear().type(updatedUsername);
  
      cy.get('input[type="email"]').clear().type(updatedEmail);
  
      cy.get('button[type="submit"]').click();
  
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Profile updated successfully!');
      });
  
      cy.get('input[type="text"]').should('have.value', updatedUsername);
      cy.get('input[type="email"]').should('have.value', updatedEmail);
    });
  
  
    it('Menampilkan error ketika submit invalid email', () => {
      const invalidEmail = 'invalid-email';
  
      cy.get('input[type="email"]').clear().type(invalidEmail);
  
      cy.get('button[type="submit"]').click();
  
      cy.get('input[type="email"]:invalid').should('exist');
    });
  
    it('setel ulang formulir setelah memuat ulang halaman', () => {
      const updatedUsername = 'ResetTest';
      const updatedEmail = 'reset@example.com';
  
      cy.get('input[type="text"]').clear().type(updatedUsername);
      cy.get('input[type="email"]').clear().type(updatedEmail);
  
      cy.reload();
  
      cy.get('input[type="text"]').should('have.value', 'JohnDoe');
      cy.get('input[type="email"]').should('have.value', 'johndoe@example.com');
      cy.get('input[type="password"]').should('have.value', '');
      cy.get('img[src="/default-profile.png"]').should('be.visible');
    });
  });