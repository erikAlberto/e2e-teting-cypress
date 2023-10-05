import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

before(() => {
    HomePage.open();
})
describe('Purchase products', () => {
    beforeEach('add products to cart', () => {
        HomePage.addProduct();
    })

    it('place order of the products', () => {
        HomePage.buttonCart.click();
        CartPage.elementProduct.should('be.visible');
        CartPage.elementProduct.should('have.length', 2);

        CartPage.buttonPlaceOrder.click();
        CartPage.placeOrder();

    })
})