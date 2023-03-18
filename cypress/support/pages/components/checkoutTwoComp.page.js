class CheckoutTwoComp{
    open(){
        cy.visit('https://www.saucedemo.com/checkout-step-two.html')
    }
    
    get finishBtnSelector(){
        return "finish"
    }
}
export default new CheckoutTwoComp