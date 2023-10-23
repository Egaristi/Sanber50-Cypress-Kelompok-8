import loginPage from "../../support/pageObject/loginPage"
const userData = require('../../fixtures/user.json')

describe('Web UI Magento', () => {
    beforeEach(() => {
        cy.visit('')
    })

// menggunakan custom command    

    it('Success Login - Magento', () => {
    cy.login(userData.validUser, userData.validPassword)
    cy.get(loginPage.WelcomeMsg).should('contain.text',userData.welcomMsg)
    })
    
    it('Failed Login Wrong Password- Magento', () => {
    cy.login(userData.validUser, userData.invalidPassword)
    cy.get(loginPage.errorMsg).should('contain.text',userData.errorMsg)
    })
    
    it('Failed Login Wrong Email- Magento', () => {
    cy.login(userData.invalidUser, userData.validPassword)
    cy.get(loginPage.errorMsg).should('contain.text',userData.errorMsg)
    })

    it('Failed Login Wrong Email and Password- Magento', () => {
    cy.login(userData.invalidUser, userData.invalidPassword)
    cy.get(loginPage.errorMsg).should('contain.text',userData.errorMsg)
    })

    })