// cypress/integration/genericWebsiteTests.js

describe('Generic Website Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.visitcopenhagen.com/')
  })

  // Test Home Page
  it('Should load the home page', () => {
    cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-button-group > .coi-banner__accept').click();
    cy.contains('Copenhagen'); // Assert that title includes 'Home'
  });



  // Test About Page
  it('Should navigate to the about page', () => {
    cy.get('a:first').click(); // Click on about page link in the navigation bar
    cy.url().should('include', 'code'); // Assert URL includes '/about'
    cy.title().should('include', 'About'); // Assert that title includes 'About'
  });

  it('Should have content in the about page', () => {
    cy.get('main').should('not.be.empty'); // Assert that the main content is not empty
  });

  // Test Contact Page
  it('Should navigate to the contact page', () => {
    cy.get('nav a[href="/contact"]').click(); // Click on contact page link in the navigation bar
    cy.url().should('include', '/contact'); // Assert URL includes '/contact'
    cy.title().should('include', 'Contact'); // Assert that title includes 'Contact'
  });

  it('Should have a contact form', () => {
    cy.get('form.contact-form').should('exist'); // Assert that a form with class 'contact-form' exists
  });

  it('Should be able to submit the contact form', () => {
    cy.get('form.contact-form input[name="name"]').type('Test Name'); // Type 'Test Name' into the name input field
    cy.get('form.contact-form input[name="email"]').type('test@example.com'); // Type a test email into the email input field
    cy.get('form.contact-form textarea[name="message"]').type('This is a test message.'); // Type a test message into the message textarea
    cy.get('form.contact-form button[type="submit"]').click(); // Click the submit button
    // You can add assertions here to check form submission success, e.g., a success message appearing
  });

});
