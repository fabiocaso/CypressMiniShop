describe('Lofin session 2', () => {
    
    it('access the dashboard', () => {
        // Spy on GET requests to /api/products
        // Even though the app doesn’t make this request, we show how intercept syntax works
       //
        cy.intercept('GET', '/api/products').as('getProducts');
        
        cy.login();

        // Visit the dashboard page
        cy.visit('/dashboard');
        cy.contains('Product Dashboard').should('be.visible');
      
        cy.fixture('products.json').then((products) => {
  products.forEach((product) => {
    //cy.pause();
    cy.contains(product.name).should('be.visible');
    cy.get('.products-list').should('contain', product.name)
    cy.log('>>>Product name is in the dashboard: ',product.name)
  });
});

        cy.log('>>>TET PASSED')
});
});
