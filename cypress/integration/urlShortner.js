describe('URL Shortner Tests', () => {
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
  })
})
