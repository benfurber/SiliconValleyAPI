const Films = require('../../routes/films.js')

describe('Films', () => {
  let films
  let expectedGetOutput = 'show'
  let dataStore = {
    get: jest.fn(() => { return expectedGetOutput })
  }

  beforeEach(() => {
    films = new Films(dataStore)
  })

  describe('.readFilms()', () => {
    it('exists', async () => {
      let data = await films.readFilms()
      expect(data).toEqual(expectedGetOutput)
    })
  })
})
