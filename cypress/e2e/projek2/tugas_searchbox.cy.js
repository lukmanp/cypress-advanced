/// <reference types="cypress" />

describe('Searchbox test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('a').should('contain.text', 'Zero Bank')
    })
		it('should type into searchbox and submit', () => {
			// cy.visit('http://zero.webappsecurity.com/index.html')
			// cy.get('a').should('contain.text', 'Zero Bank')

			//search box and enter
			cy.get('#searchTerm').type('zero {enter}')

			// Assertion
			cy.wait(2000);
			cy.get('h2').should('contain.text', 'Search Results:')
			// cy.get('a.brand').should('contain.text', 'Zero Bank')
			// cy.get('a[href="/online-banking.html"]').should('be.visible');
			cy.get('a[href="/online-banking.html"]').should('contain', 'Zero - Free Access to Online Banking');
		})
	
})