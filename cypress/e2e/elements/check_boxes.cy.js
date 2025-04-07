/// <reference types="cypress" />

const filterTests = (definedTags, runTest) => {
  if (Cypress.env('tags')) {
    const tags = Cypress.env('tags').split('/')
    const isFound = definedTags.some((definedTag) => tags.includes(definedTag))

    if (isFound) {
      runTest()
    }
  } else {
    runTest()
  }
}

filterTests(['all', 'ui', 'elements', 'check_boxes'], () => {
  describe('DemoQA Check Boxes Page', () => {
    beforeEach(() => {
      // Navigate to the Check Boxes page before each test
      cy.visit(`${Cypress.config('baseUrl')}/checkbox`)
    })

    it('As a user, I should see the correct result text when the "Home" checkbox is selected', () => {
      // Select the "Home" checkbox to select all checkboxes
      cy.get('#tree-node-home').check({ force: true }).should('be.checked')

      // Validate that the result text displays all nested items
      cy.get('#result')
        .should('be.visible')
        .within(() => {
          const expectedText = [
            'home',
            'desktop',
            'notes',
            'commands',
            'documents',
            'workspace',
            'react',
            'angular',
            'veu',
            'office',
            'public',
            'private',
            'classified',
            'general',
            'downloads',
            'wordFile',
            'excelFile',
          ]
          expectedText.forEach((item) => {
            cy.get('.text-success').should('contain.text', item)
          })
        })
    })

    it('As a user, I should see no result text after deselecting all checkboxes', () => {
      // Select and then deselect the "Home" checkbox to clear selections
      cy.get('#tree-node-home').check({ force: true }).should('be.checked')
      cy.get('#tree-node-home').uncheck({ force: true })

      // Validate there is no text in the results
      cy.get('#result').should('not.exist')
    })

    it('As a user, I should see the correct result text when selecting only the "Desktop" checkbox', () => {
      // Expand "Home" to reveal nested checkboxes
      cy.get('[aria-label="Toggle"]').first().click()

      // Select the "Desktop" checkbox
      cy.get('#tree-node-desktop').check({ force: true }).should('be.checked')

      // Validate that the result text displays only "desktop", "notes", and "commands"
      cy.get('#result')
        .should('be.visible')
        .within(() => {
          const expectedText = ['desktop', 'notes', 'commands']
          expectedText.forEach((item) => {
            cy.get('.text-success').should('contain.text', item)
          })
        })
    })

    it('As a user, I should see the correct result text when selecting only the "Documents" checkbox', () => {
      // Expand "Home" and then "Documents" to reveal nested checkboxes
      cy.get('[aria-label="Toggle"]').first().click()
      cy.get('[aria-label="Toggle"]').eq(1).click()

      // Select the "Documents" checkbox
      cy.get('#tree-node-documents').check({ force: true }).should('be.checked')

      // Validate that the result text displays "documents", "workspace", "react", "angular", "veu", "office", "public", "private", "classified", and "general"
      cy.get('#result')
        .should('be.visible')
        .within(() => {
          const expectedText = [
            'documents',
            'workspace',
            'react',
            'angular',
            'veu',
            'office',
            'public',
            'private',
            'classified',
            'general',
          ]
          expectedText.forEach((item) => {
            cy.get('.text-success').should('contain.text', item)
          })
        })
    })

    it('As a user, I should see the correct result text when selecting only the "Downloads" checkbox', () => {
      // Expand "Home" and then "Downloads" to reveal nested checkboxes
      cy.get('[aria-label="Toggle"]').first().click()
      cy.get('[aria-label="Toggle"]').eq(2).click()

      // Select the "Downloads" checkbox
      cy.get('#tree-node-downloads').check({ force: true }).should('be.checked')

      // Validate that the result text displays "downloads", "wordFile", and "excelFile"
      cy.get('#result')
        .should('be.visible')
        .within(() => {
          const expectedText = ['downloads', 'wordFile', 'excelFile']
          expectedText.forEach((item) => {
            cy.get('.text-success').should('contain.text', item)
          })
        })
    })
  })
})