/// <reference types="cypress" />

describe('all proccess', function () {
	before(() => {
		cy.clearAllCookies() // clear all cookies
    	cy.clearAllLocalStorage() // clear all storage
		cy.clearAllSessionStorage()
		cy.visit('www.saucedemo.com')
	})

	it('Login', () => {
		cy.get('.login_logo').should('contain.text', 'Swag Labs')
		cy.get('#user-name').type('standard_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.url().should('include', '/inventory.html')

		cy.contains('Sauce Labs Bike Light').click()
		cy.contains('Sauce Labs Bike Light').should('be.visible')
		cy.get('.shopping_cart_link').should('be.visible')
		cy.get('#add-to-cart-sauce-labs-bike-light').click()
		cy.get('.shopping_cart_link').click()
		cy.get('.title').should('contain.text', 'Your Cart')

		cy.get('.btn_action btn_medium checkout_button').click()
		cy.get('.title').should('contain.text', 'Checkout: Your Information')

		cy.get('#first-name').type('Lukman	')
		cy.get('#last-name').type('Prayogi')
		cy.get('#postal-code').type('16810')
		cy.wait(1000)

		cy.get('#continue').click()
		cy.get('.title').should('contain.text', 'Checkout: Overview')

		cy.get('#finish').click()
		cy.get('.complete-header').should('contain.text', 'Thank you for your order!')




		
	})
	
})