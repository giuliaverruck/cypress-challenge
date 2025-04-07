/// <reference types="cypress"/>

describe('Test alerts Feature', () => {
  beforeEach(() => {
    // Navigate to the Alerts page before each test
    cy.visit('/alerts')
  })

  it('Verify simple alert is working properly', () => {
    // Click the "Click me" button for the simple alert
    cy.get('#alertButton').click()

    // Verify the alert message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You clicked a button')
    })
  })

  it('Verify simple alert after 5 seconds is working properly', () => {
    // Click the "Click me" button for the timed alert
    cy.get('#timerAlertButton').click()

    // Verify the alert message after 5 seconds
    cy.wait(5000) // Wait for 5 seconds
    cy.on('window:alert', (str) => {
      expect(str).to.equal('This alert appeared after 5 seconds')
    })
  })

  it('Verify Confirmation OK Alert message is working properly', () => {
    // Click the "Click me" button for the confirmation alert
    cy.get('#confirmButton').click()

    // Stub the window:confirm to return true (OK)
    cy.on('window:confirm', () => true)

    // Verify the confirmation result message
    cy.get('#confirmResult').should('contain', 'You selected Ok')
  })

  it('Verify Confirmation Cancel Alert message is working properly', () => {
    // Click the "Click me" button for the confirmation alert
    cy.get('#confirmButton').click()

    // Stub the window:confirm to return false (Cancel)
    cy.on('window:confirm', () => false)

    // Verify the confirmation result message
    cy.get('#confirmResult').should('contain', 'You selected Cancel')
  })

  it('Verify prompt Alert message is working properly', () => {
    const promptText = 'Giulia'

    // Stub the window:prompt to return the prompt text
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(promptText)
    })

    // Click the "Click me" button for the prompt alert
    cy.get('#promtButton').click()

    // Verify the prompt result message
    cy.get('#promptResult').should('contain', `You entered ${promptText}`)
  })
})