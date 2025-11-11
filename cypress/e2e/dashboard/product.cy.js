describe('Product Flow', () => {
    it('adds a product using custom command', () => {
      cy.login();
      cy.addProduct({
        name: 'Test Widget',
        price: '$99',
        category: 'Tools'
      });
      cy.url().should('include', '/dashboard');
    });
  });
  

  describe('New Product Flow', () => {
    it('adds a product NEW' , () => {
      cy.login();
      cy.addProduct({
        price: '123',
        category: 'Tool',
        name: 'Favo'
      });
    });
  });
  