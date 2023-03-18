class CheckoutCompleteComp{
    open(){
        cy.visit('https://www.saucedemo.com/checkout-complete.html')
    }
    
    get completeTextSelector(){
        return ".complete-header"
    }
}
export default new CheckoutCompleteComp