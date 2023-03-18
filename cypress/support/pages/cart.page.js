class Cart{

    open(){
        cy.visit('https://www.saucedemo.com/cart.html')
    }

    get checkoutBtnSelector(){
        return "checkout"
    }
}
export default new Cart