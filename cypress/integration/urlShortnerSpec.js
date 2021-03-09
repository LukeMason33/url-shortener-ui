describe('URL Shortner', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'urlData.json',
      statusCode: 200
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        long_url: 'Test POST fecth long_url',
        title: 'Test POST fetch Title'
      }
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should load the application with one shortned url titled Test Title', () => {
    cy.get('.url h3').should('contain', 'Test Title')
  })

  it('Should display the url shortener form to the user', () => {
    cy.get('form')
      .get('.title').should('have.attr', 'placeholder', 'Title...')
      .get('.urlToShorten').should('have.attr', 'placeholder', 'URL to Shorten...')
      .get('button').should('contain', 'Shorten Please!')
  })
})
