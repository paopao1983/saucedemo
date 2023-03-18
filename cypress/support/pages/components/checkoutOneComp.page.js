class CheckoutOne{
    open(){
        cy.visit('https://www.saucedemo.com/checkout-step-one.html')
    }
    
    get firstNameSelector(){
        return "firstName"
    }
    get laststNameSelector(){
        return "lastName"
    }
    get postalCodeSelector(){
        return "postalCode"
    }
    get continueSelector(){
        return "continue"
    }
}
export default new CheckoutOne