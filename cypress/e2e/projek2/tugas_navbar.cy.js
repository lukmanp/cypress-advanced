/// <reference types="cypress" />

describe('Login/Logout Test', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('a').should('contain.text', 'Zero Bank')
	})
	it('Assert Navbar Link Online Banking', () => {
		cy.contains('Online Banking').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('contain.text', 'Online Banking')
	})

    it('Assert Navbar Link Feedback', () => {
		cy.contains('Feedback').click()
        cy.url().should('include', '/feedback.html')
        cy.get('h3').should('contain.text', 'Feedback')
	})

    it('Assert Navbar Link Feedback', () => {
		cy.contains('Zero Bank').click()
        cy.url().should('include', '/index.html')
        cy.get('a.brand').should('contain.text', 'Zero Bank')
	})
})
