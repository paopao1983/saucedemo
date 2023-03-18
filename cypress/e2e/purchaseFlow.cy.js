import Login from '../support/pages/login.page'
import Inventory from '../support/pages/inventory.page'
import Cart from '../support/pages/cart.page' 
import Checkout from '../support/pages/checkout.page' 

describe("purchase flow", () => {

    it.only("e2e purchase flow", () => {
      Login.open();

      cy.fillOutLoginForm("standard_user","secret_sauce")
      cy.getByData(Inventory.productsContainerSelector).should("exist")
      cy.get(Inventory.inventoryItemsSelector).first().find("button").click()
      cy.get(Inventory.inventoryItemsSelector).last().find("button").click()
      cy.get(Inventory.shoppingCartContainerSelector).click().url().should("include","cart.html")
      
      cy.getByData(Cart.checkoutBtnSelector).click().url().should("include", "checkout-step-one.html")
       
      cy.getByData(Checkout.CheckoutOneComp.firstNameSelector).type("Sandra")
      cy.getByData(Checkout.CheckoutOneComp.laststNameSelector).type("Castro")
      cy.getByData(Checkout.CheckoutOneComp.postalCodeSelector).type("00000")
      cy.getByData(Checkout.CheckoutOneComp.continueSelector).click().url().should("include", "checkout-step-two.html")
     
      cy.getByData(Checkout.CheckoutTwoComp.finishBtnSelector).click()
      cy.get(".complete-header").should("have.text", "Thank you for your order!")
    })
})