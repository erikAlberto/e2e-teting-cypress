import Page from './Page'
import users from '../fixtures/users.json'

class CartPage extends Page {

    get elementProduct() {
        return cy.get('.success');
    }
    get inputName() {
        return cy.get('#name');
    }

    get inputCountry() {
        return cy.get('#country');
    }

    get inputCity() {
        return cy.get('#city');
    }
    get inputCart() {
        return cy.get('#card');
    }
    get inputMounth() {
        return cy.get('#month');
    }
    get inputYear() {
        return cy.get('#year');
    }

    get buttonPurchase() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }

    get buttonConfirmPurchase() {
        return cy.get('.confirm');
    }

    get buttonPlaceOrder() {
        return cy.get('.col-lg-1 > .btn');
    }
    
    placeOrder(){
        this.inputName.type(users.name);
        this.inputCountry.type(users.country);
        this.inputCity.type(users.city);
        this.inputCart.type(users.card);
        this.inputMounth.type(users.month);
        this.inputYear.type(users.year);
        this.buttonPurchase.click();
        this.buttonConfirmPurchase.click();
    }
}

export default new CartPage();