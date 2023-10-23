// ***********************************************
import loginPage from "./pageObject/loginPage"
// This example commands.js shows you how toW
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (user_name, pass_word) => {
    cy.get(loginPage.loginBtn).click()
    cy.get(loginPage.username).clear().type(user_name)
    cy.get(loginPage.password).clear().type(pass_word)
    cy.get(loginPage.submitBtn).click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })