// cypress/e2e/login_tests/negative_login.cy.js

describe('Negative Login Test', () => {
    const url = 'https://the-internet.herokuapp.com/login';
  
    it('Should fail login with incorrect credentials', () => {
      cy.visit(url);
      cy.get('#username').type('wrongUser'); // Enter an invalid username
      cy.get('#password').type('wrongPassword'); // Enter an invalid password
      cy.get('button[type="submit"]').click(); // Click the login button
  
      // Assert login failure
      cy.url().should('include', '/login'); // Check URL does not change
      cy.get('.flash.error').should('contain', 'Your username is invalid!'); // Check error message
    });
  });
  