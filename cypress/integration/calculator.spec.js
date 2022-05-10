describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // do the number buttons update the display of the running total
  it('should have correctly working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  // do the artithmetical operations update the display with the result of the operation
  it('arithmetical operations should update the display of the running total', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  // chain mulitple
  it('should chain together multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  // negative numbers
  it('should handle negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  // decimal
  it('should handle decimal numbers', ()=>{
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  // large numbers
  it('should handle large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9702')

  })

  // divide by zero
  it('should be able to divide by zero', ()=>{
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Cannot divide by 0')
  })
})