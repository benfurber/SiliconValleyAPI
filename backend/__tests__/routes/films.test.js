const Films = require('../../routes/films.js')

describe('Films', () => {
  let films
  let expectedGetOutput = [{
    name: 'Minimum Viable Product',
    image: 'http://static.tvmaze.com/uploads/images/medium_landscape/49/123633.jpg'
  }]
  let dataStore = {
    get: jest.fn(() => { return expectedGetOutput })
  }

  beforeEach(() => {
    films = new Films(dataStore)
  })

  describe('.readFilms()', () => {
    it('returns an object with name and image', () => {
      expect(films.readFilms()).toEqual(expectedGetOutput)
    })
  })
})
