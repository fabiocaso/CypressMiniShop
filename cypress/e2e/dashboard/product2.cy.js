describe('New Product Flow', () => {
    it('adds a product NEW' , () => {
      cy.login();
      cy.addProduct({
        price: '123',
        category: 'Tool!!!!',
        name: 'Favo'
      });
    });
  });
  