// cypress/e2e/login_tests/exception_login.cy.js

describe('Exception Login Test', () => {
    const url = 'https://the-internet.herokuapp.com/login';
  
    it('Should show error message when fields are empty', () => {
      cy.visit(url);
      cy.get('button[type="submit"]').click(); // Click the login button without entering any credentials
  
      // Assert login failure due to empty credentials
      cy.url().should('include', '/login'); // Check URL does not change
      cy.get('.flash.error').should('contain', 'Your username is invalid!'); // Check error message
    });
  });
  