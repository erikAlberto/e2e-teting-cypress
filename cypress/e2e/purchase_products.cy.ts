before(() => {
  cy.visit('/');
  cy.fixture('users').then((data) => {
    this.data = data;
  })
})
describe('Purchase products', () => {
  let names = ['Samsung galaxy s6','Nokia lumia 1520'];
  beforeEach('add products to cart', () => {
    
    names.forEach(item => {
      cy.contains('.card-title > .hrefch', `${item}`).click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('.active > .nav-link').click();
    })
  })

  it('place order of the products', () => {
    cy.get('#cartur').click();

    names.forEach(item => {
      cy.contains('.success', `${item}`);
    })

    cy.get('.success').should('be.visible');
    cy.get('.success').should('have.length', 2);

    cy.get('.col-lg-1 > .btn').click();

    cy.get('#name').type(this.data.name);
    cy.get('#country').type(this.data.country);
    cy.get('#city').type(this.data.city);
    cy.get('#card').type(this.data.card);
    cy.get('#month').type(this.data.month);
    cy.get('#year').type(this.data.year);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.confirm').click();
  })

})