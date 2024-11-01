# cypress-assignment: Login Test with three test cases

This project contains automated tests for login functionality on `https://the-internet.herokuapp.com/login` using Cypress.

## Project Structure

- **e2e/**: Contains test cases for three scenerios
  ## positive-login.cy.js,
  ## negative-login.cy.js, and
  ## exception-Login.cy.js

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HumiraAlam/cypress-login-test/  <repository_link>
   cd cypress-assignment
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run tests**:
   - Open Cypress Test Runner:
     ```bash
     npx cypress open
     ```
   - Run tests in headless mode:
     ```bash
     npx cypress run
     ```

## Test Cases Document

- **Positive Case**: Valid credentials (`tomsmith` / `SuperSecretPassword!`) log in successfully.
- **Negative Case**: Incorrect credentials prevent login and show an error message.
- **Exception Case**: Empty credentials display an error message indicating invalid input.
