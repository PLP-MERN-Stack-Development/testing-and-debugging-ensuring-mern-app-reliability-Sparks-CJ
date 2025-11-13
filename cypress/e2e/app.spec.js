describe('MERN App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('renders the main page', () => {
    cy.contains('Welcome').should('exist'); // Adjust according to your app
  });

  it('can create a post', () => {
    cy.get('input[name="title"]').type('Cypress Test Post');
    cy.get('textarea[name="content"]').type('This is a Cypress test content');
    cy.get('button[type="submit"]').click();
    cy.contains('Cypress Test Post').should('exist');
  });

  it('can log in', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('exist'); // Adjust according to your app
  });
});
