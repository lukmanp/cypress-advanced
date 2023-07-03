/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the kitchen sink', () => {
        cy.visit('https://example.cypress.io')
        cy.get('h1').contains('Kitchen Sink')
        cy.contains('get').click()

        //Should be on a new URL which includes 'commands/querying'
        cy.url().should('include', '/commands/querying')
    })
})