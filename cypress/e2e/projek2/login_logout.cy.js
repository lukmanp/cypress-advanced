/// <reference types="cypress" />

describe('Login/Logout Test', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('a').should('contain.text', 'Zero Bank')
	})
	it('Login with wrong username and password', () => {
		// click tombol Signin dan validasi halaman
		cy.wait(2000)
		cy.get('#signin_button').click()
		cy.get('h3').should('contain.text', 'Log in to ZeroBank')

		// input username, password dan click tombol sign in
		cy.get('#user_login').clear()
		cy.get('#user_login').type('Salah Username')
		cy.get('#user_password').clear()
		cy.get('#user_password').type('Salah password')
		cy.get('#user_remember_me').check()
		cy.get('input[name="submit"]').click()
		cy.get('.alert-error').should(
			'contain.text',
			'Login and/or password are wrong.'
		)
	})

	it('Login with Valid username and password', () => {
		cy.fixture('user').then(user => {
			const username = user.name
			const password = user.pass

			cy.login(username, password)
		})
	})
    it('Logout', () => {
		cy.fixture('user').then(user => {
			const username = user.name
			const password = user.pass

			cy.login(username, password)
            cy.logout()
		})
	})
})
