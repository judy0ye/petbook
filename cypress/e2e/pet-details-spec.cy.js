describe('Should test single pet details page', () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets', {
      statusCode: 200,
      fixture: "allPets.json"
    })
    cy.visit('https://petbook-43hv8o7hk-paulina-isabel.vercel.app/')
  });

  it('Should select pet and be shown pet details for that pet', () => {
    cy.intercept('GET', `https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets/1`,{
      statusCode: 200,
      fixture: 'singlePet.json'
    }).as('check')
    cy.get('.all-pets-container > :nth-child(1)')
    cy.get(':nth-child(1) > .info-container')
    cy.get(':nth-child(1) > .info-container > a > .detail-link-icon').click()
    cy.url().should('eq', 'https://petbook-43hv8o7hk-paulina-isabel.vercel.app/1')
    cy.wait('@check')
    cy.get('.details-container')
    cy.get('.pet').get('.pet-image')
    cy.get('.pet > h2').contains('Oreo') 
    cy.get('.pet > p').contains('Owner: Judy')
    cy.get('.pet-info')
    cy.get('.pet-info > :nth-child(2)').contains('Nickname: Oreo')
    cy.get('.pet-info > :nth-child(3)').contains('2.5')
    cy.get('.pet-info > :nth-child(4)').contains('Fun Facts: He\'s had 2 types of tape worms')    
  });

  it('Should return home to all pets on button click', () => {
    cy.intercept('GET', `https://petbook-be-git-refactor-edit-server-name-aliceabarca.vercel.app/api/v1/pets/1`,{
      statusCode: 200,
      fixture: 'singlePet.json'
    }).as('check')
    cy.visit('https://petbook-43hv8o7hk-paulina-isabel.vercel.app/1')
    cy.url().should('eq', 'https://petbook-43hv8o7hk-paulina-isabel.vercel.app/1')
    cy.wait('@check')
    cy.get('.back-to-all-pets-button').click()
    cy.url().should('eq', 'https://petbook-43hv8o7hk-paulina-isabel.vercel.app/')
  });

});