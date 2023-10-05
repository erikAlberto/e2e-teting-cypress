import Page from './Page'

class HomePage extends Page {
    get buttonAddCart() {
        return cy.get('.col-sm-12 > .btn');
    }

    get buttonHome() {
        return cy.get('.active > .nav-link');
    }

    get buttonCart() {
        return cy.get('#cartur');
    }

    open () {
        return super.open('/');
    }

    addProduct() {
        let names = ['Samsung galaxy s6','Nokia lumia 1520'];
        return names.forEach(item => {
            cy.contains('.card-title > .hrefch', `${item}`).click();
            this.buttonAddCart.click();
            this.buttonHome.click();
        })
    }
}

export default new HomePage();