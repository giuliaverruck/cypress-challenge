/// <reference types="cypress"/>

// Load test data from 'test-data.json' before all tests. This ensures that the data is available for all test cases within this suite.
before(() => {
  cy.fixture('test-data').as('data')
})

describe('Test Student Registration Form', () => {
  // Before each test case, visit the specified URL. This setup ensures that each test starts with a fresh form.
  beforeEach(() => {
      cy.visit("automation-practice-form")
  })

  it("Verify empty field validation", () => {
      // Attempt to submit the form without filling any fields.
      cy.get('#submit').click()

      // Assert that the 'border-color' CSS property of the 'firstName' field is 'rgb(220, 53, 69)', indicating an error state.
      cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
      // Assert that the 'border-color' CSS property of the 'lastName' field is also 'rgb(220, 53, 69)', indicating an error state.
      cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')

      // Assert that the 'color' CSS property of the gender radio button labels is 'rgb(220, 53, 69)', indicating that they are also in an error state.
      cy.get("label[for='gender-radio-1']").should('have.css', 'color', 'rgb(220, 53, 69)')
      cy.get("label[for='gender-radio-2']").should('have.css', 'color', 'rgb(220, 53, 69)')
      cy.get("label[for='gender-radio-3']").should('have.css', 'color', 'rgb(220, 53, 69)')

      // Assert that the 'border-color' CSS property of the 'userNumber' field is 'rgb(220, 53, 69)', indicating an error state due to the field being empty.
      cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')
  })

  it("Verify invalid Email and Mobile validation", function () {
      // Access the 'invalidFormData' from the loaded test data.
      const invalidData = this.data.invalidFormData
      // Iterate over the 'email' array in the 'invalidData' object.
      for (let i = 0; i < invalidData.email.length; i++) {
          // Clear the 'userEmail' field and type the current invalid email.
          cy.get('#userEmail').clear().type(invalidData.email[i])
          // Clear the 'userNumber' field and type the current invalid mobile number.
          cy.get('#userNumber').clear().type(invalidData.mobileNumber[i])
          // Attempt to submit the form with the invalid data.
          cy.get('#submit').click()

          // Assert that the 'border-color' CSS property of the 'userEmail' field is 'rgb(220, 53, 69)', indicating an error state.
          cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')
          // Assert that the 'border-color' CSS property of the 'userNumber' field is 'rgb(220, 53, 69)', indicating an error state.
          cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')
      }
  })

  it("Verify form submission with valid data", function () {
      // Access the 'validFormData' from the loaded test data.
      const validData = this.data.validFormData

      // Type the 'firstName' into the '#firstName' field.
      cy.get('#firstName').type(validData.firstName)
      // Type the 'lastName' into the '#lastName' field.
      cy.get('#lastName').type(validData.lastName)
      // Clear the 'userEmail' field and type the valid email.
      cy.get('#userEmail').clear().type(validData.email)
      // Click the gender radio button based on the 'gender' value from the test data.
      cy.get(`label[for='gender-radio-${validData.gender}']`).click()
      // Clear the 'userNumber' field and type the valid mobile number.
      cy.get('#userNumber').clear().type(validData.mobileNumber)

      // Type date of birth directly into the input field and press Enter to simulate date selection.
      cy.get('#dateOfBirthInput').type(validData.birthDate + '{enter}');

      // Type the subjects into the '#subjectsInput' field.
      cy.get('#subjectsInput').type(validData.subjects)
      // Click the first hobbies checkbox, using 'force: true' to ensure it's clicked even if it's covered.
      cy.get("#hobbies-checkbox-1").click({ force: true })
      // Type the address into the '#currentAddress' field.
      cy.get('#currentAddress').type(validData.address)

      // Submit the form.
      cy.get('#submit').click()

      // Assert that the modal with the ID 'example-modal-sizes-title-lg' contains the text 'Thanks for submitting the form'.
      cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  })
})