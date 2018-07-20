const Films = require('../../models/films.js')

describe('Films', () => {
  let films
  let seasonOne = {
    name: 'Minimum Viable Product',
    image: 'http://static.tvmaze.com/uploads/images/medium_landscape/49/123633.jpg',
    season: 1
  }
  let seasonTwo = {
    name: 'Sand Hill Shuffle',
    image: 'http://static.tvmaze.com/uploads/images/medium_landscape/49/123616.jpg',
    season: 2
  }
  let expectedGetOutput = [seasonOne, seasonTwo]
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

    it('when given a number as an arguments, filters results by that season', () => {
      expect(films.readFilms(2)).toEqual([seasonTwo])
    })
  })

  describe('_filterResults()', () => {
    it('filters results by season of the number given', () => {
      expect(films._filterResults(expectedGetOutput, 2)).toEqual([seasonTwo])
    })
  })
})
