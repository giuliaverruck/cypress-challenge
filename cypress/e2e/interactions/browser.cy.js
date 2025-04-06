/// <reference types="cypress" />

describe('Test Browser Windows Functionality', () => {
  beforeEach(() => {
    // Navigate to the Browser Windows page before each test
    cy.visit(`${Cypress.config('baseUrl')}/browser-windows`)
  })

  it('Verify "New Tab" button opens a new tab with the correct content and URL', () => {
    // Stub the window.open function to control the new tab
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    // Click the "New Tab" button
    cy.get('#tabButton').click()

    // Assert that window.open was called
    cy.get('@windowOpen').should('be.called')

    // Get the URL of the new tab
    cy.get('@windowOpen').then((stub) => {
      const newTabUrl = stub.args[0][0]
      expect(newTabUrl).to.equal('/sample')
    })

    // Visit the new tab URL to check its content
    cy.visit('https://demoqa.com/sample', { log: false }) // Prevent duplicate visit log

    // Assert that the new tab contains the expected text
    cy.get('body').should('contain', 'This is a sample page')
  })

  it('Verify "New Window" button opens a new window and closes it', () => {
    // Stub the window.open function to control the new window
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    // Click the "New Window" button
    cy.get('#windowButton').click()

    // Assert that window.open was called
    cy.get('@windowOpen').should('be.called')

    // No direct validation of the new window content since Cypress can't directly interact with it
    // This test mainly checks that the new window opens
  })

})