// cypress/e2e/login_tests/positive_login.cy.js

describe('Positive Login Test', () => {
    const url = 'https://the-internet.herokuapp.com/login';
  
    it('Should log in with valid credentials', () => {
      cy.visit(url);
      cy.get('#username').type('tomsmith'); // Enter a valid username
      cy.get('#password').type('SuperSecretPassword!'); // Enter a valid password
      cy.get('button[type="submit"]').click(); // Click the login button
  
      // Assert successful login
      cy.url().should('include', '/secure'); // Check URL redirection
      cy.get('.flash.success').should('contain', 'You logged into a secure area!'); // Check success message
    });
  });
  