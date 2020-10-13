/// <reference types="cypress" />

describe('Registration Page', () => {
    beforeEach(() => {
      cy.visit('/')

      cy.get('a[href = "/sg/register"]')
        .click()
    })

    it('Register with invalid phone number format', () => {
        // Enter Legal name
        cy.get('input[name = "full_name"]')
          .type('Khanh001 Pham').should('have.value', 'Khanh001 Pham')

        // Enter email
        cy.get('input[name = "email"]')
          .type('khanhpnd9488+001@gmail.com').should('have.value', 'khanhpnd9488+001@gmail.com')

        //Select country code
        cy.get('div.flag-select__icon')
          .click()

        cy.get('div.q-virtual-scroll__content div.q-item__label').contains('Viet Nam')
          .click()
        
        //Enter phone number
        cy.get('input[name = "phone"]')
          .type('900000abc').should('have.value', '900000abc')

        //Select found reason
        cy.get('div[placeholder = "Select any of the following"]')
          .click()

        cy.get('div.q-virtual-scroll__content div.q-item__label').contains('Referral')
          .click()

        //Click Register
        cy.get('div[role = "checkbox"]')
          .click().should('have.attr', 'aria-checked', 'true')

        cy.get('button[type = "submit"')
          .click()

        //Expected to see error message
        cy.get('div[name = "phone"]')
          .should('have.attr', 'error', 'true')
        cy.get('div[name = "phone"] div.aspire-label__text')
          .should('contain', 'Incorrect phone format for phone')
    })
})