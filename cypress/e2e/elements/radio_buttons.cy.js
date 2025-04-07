/// <reference types="cypress"/>

describe('Test Radio button Feature', () => {
  beforeEach(() => {
    // Navigate to the Radio Button page before each test
    cy.visit(`${Cypress.config('baseUrl')}/radio-button`)
  })

  it('Verify "No" Radio button is disabled', () => {
    // Validate that the "No" radio button is disabled
    cy.get('#noRadio').should('be.disabled')
  })

  it('Verify "Yes" & "Impressive" Radio buttons can be checked and display correct text', () => {
    // Check the "Yes" radio button
    cy.get('#yesRadio').check({ force: true }).should('be.checked')

    // Validate that the success text contains 'Yes'
    cy.get('.text-success').should('contain', 'Yes')

    // Check the "Impressive" radio button
    cy.get('#impressiveRadio').check({ force: true }).should('be.checked')

    // Validate that the success text contains 'Impressive'
    cy.get('.text-success').should('contain', 'Impressive')
  })
})