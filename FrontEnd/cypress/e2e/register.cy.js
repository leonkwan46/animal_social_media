/* eslint-disable no-undef */

const username = "ABC";
const password = "HAHAHA123";
const wrong = "asda132123sd";

describe('Register Page', () => {

  it.only('Visits Page', () => {
    cy.visit('http://localhost:3000/test')
  })

  it('Inputs', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('#submit').click()
    cy.get('#username').should('exist')
    cy.get('#password').should('exist')
    cy.get('#confirm_password').should('exist')
  })

  it('Check Passwords', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#confirm_password').type(password).invoke('val').should('equal', password)
    cy.get('#submit').click()
    //TODO: Change the response (maybe redirect to HomePage)
    cy.on('window:alert', (msg) => {
      expect(msg).contains(username)
    })
  })

  it('Check Wrong Passwords', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#confirm_password').type(wrong).invoke('val').should('not.equal', password)
    cy.get('#submit').click()
  })
})