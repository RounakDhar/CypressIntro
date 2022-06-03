/// <reference types ="Cypress" />

it('google test',function(){
    //it('google test',()=>{
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step By Step{enter}')


    cy.get('.dmenke > :nth-child(2) >  .usJj9c > .r > .1' ).click()

})