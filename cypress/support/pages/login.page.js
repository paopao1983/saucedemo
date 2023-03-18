class Login{

    open() {
        cy.visit('https://www.saucedemo.com/')
    }
 
    get userNameSelector(){
        return "username"
    }
    get passwordSelector(){
        return "password"
    }
    get loginBntSelector(){
        return "login-button"
    }
    get errorMsgSelector(){
        return "error"
    }
    
}
export default new Login()