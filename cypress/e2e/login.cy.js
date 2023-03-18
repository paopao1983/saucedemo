import Login from '../support/pages/login.page'
import Inventory from '../support/pages/inventory.page'

describe('login validations', () => {
  beforeEach('navigate to the page', ()=>{
    //cy.visit('https://www.saucedemo.com/')
    Login.open();
  })

  it('sucess login', () => {
    cy.fillOutLoginForm("standard_user","secret_sauce")
    cy.getByData(Inventory.productsContainerSelector).should("exist")
  })

  it('wrong user/pwd', () => {
    cy.fillOutLoginForm("standard_user2","secret_sauce")
    cy.getByData(Login.errorMsgSelector).contains("Epic sadface: Username and password do not match any user in this service")
    
  })

  it('locked user', () => {
    cy.fillOutLoginForm("locked_out_user","secret_sauce")
    cy.getByData(Login.errorMsgSelector).contains("Epic sadface: Sorry, this user has been locked out.")
  })
  
})