/// <reference types="cypress" />

describe('Searchbox test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('a').should('contain.text', 'Zero Bank')
    })
		it('should type into searchbox and submit', () => {
			//search box and enter
			cy.get('#searchTerm').type('online {enter}')

			// Assertion
			cy.get('h2').should('contain.text', 'Search Results:')
		})
	
})
