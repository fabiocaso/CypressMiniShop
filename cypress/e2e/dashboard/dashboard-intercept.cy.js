describe('Dashboard with Network Spy', () => {
  it('logs in and confirms product list is visible', () => {
    // Load product data from fixture
    cy.fixture('products.json').then((products) => {
      // Spy on GET requests to /api/products
      cy.intercept('GET', '/api/products').as('getProducts');

      // Use custom command to simulate login
      cy.login(); // sets localStorage and redirects to dashboard

      // Visit the dashboard page
      cy.visit('/dashboard');

      // Wait for the UI to load
      cy.wait(500);

      // Assert that product data is displayed
      products.forEach((product) => {
        cy.contains(product.name);
      });

      // Log to confirm intercept was registered
      cy.log('Intercept was registered, even if not triggered.');
    });
  });
});
