// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
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

// import cypress = require("cypress")
// import { contains } from "cypress/types/jquery"

// const common = require("mocha/lib/interfaces/common");

// sypress.command.add('login'(username,password))

Cypress.Commands.add('login', (username, password) => {
	cy.wait(2000)
	cy.get('#signin_button').click()
	cy.get('h3').should('contain.text', 'Log in to ZeroBank')

	// input username, password dan click tombol sign in
	cy.get('#user_login').clear()
	cy.get('#user_login').type(username)
	cy.get('#user_password').clear()
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').check()
	cy.get('input[name="submit"]').click()
});

Cypress.Commands.add('logout', () => {
    cy.get('.dropdown-toggle').should('be.visible')
    cy.contains('username').click()
    cy.get('#logout_link').should('be.visible')
    cy.get('#logout_link').click()
    cy.get('a').should('contain.text', 'Zero Bank')
    cy.get('strong').should('contain.text', 'Home')
    cy.get('strong').should('contain.text', 'Online Banking')
    cy.get('strong').should('contain.text', 'Feedback')

})
