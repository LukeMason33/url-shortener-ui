describe('URL Shortner', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'urlData.json',
      statusCode: 200
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        "id": 2,
        "long_url": "Test POST fecth long_url",
        "short_url": "http://localhost:3001/useshorturl/2",
        "title": "Test POST fetch Title"
      }
    })
  })

  it('Should load the application with one shortned url titled Test Title', () => {
    cy.visit('http://localhost:3000/')
      .get('.url h3').should('contain', 'Test Title')
      .get('.url').should('have.length', 1)
  })

  it('Should display the url shortener form to the user', () => {
    cy.get('form')
      .get('.title').should('have.attr', 'placeholder', 'Title...')
      .get('.urlToShorten').should('have.attr', 'placeholder', 'URL to Shorten...')
      .get('button').should('contain', 'Shorten Please!')
  })

  it('Should be able to type into the form inputs', () => {
    cy.get('form')
      .get('.title').type('Test POST fetch Title')
      .get('.urlToShorten').type('Test POST fecth long_url')
  })

  it('Should be able to submit the form and see the shortened url pop up on screen', () => {
    cy.get('button').click()
      .get('.url').should('have.length', 2)
  })
})
