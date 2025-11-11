describe('Flaky Dashboard Test', () => {
    beforeEach(() => {
      cy.session('adminUser', () => {
        cy.visit('/login');
        cy.get('#email').type('admin@test.com');
        cy.get('#password').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
    });
  

    it('waits correctly for product data to load', () => {
        cy.visit('/dashboard');
    
        // Wait for the container and then assert
        cy.get('.products-list').should('contain', 'Notebook');
      });
  });