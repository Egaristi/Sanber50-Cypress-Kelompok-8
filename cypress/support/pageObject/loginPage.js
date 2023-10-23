class LoginPage{
    
    username = '#email'
    password = '#pass'
    loginBtn = '.panel > .header > .authorization-link > a'
    submitBtn = '.action.login.primary'
    errorMsg = '.message-error > div'
    WelcomeMsg = ':nth-child(2) > .greet > .logged-in'


    inputUsername(){
        cy.get(this.username).clear()
    }

    inputPassword(){
        cy.get(this.password).clear()
    }
    
}
export default new LoginPage()