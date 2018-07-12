const Films = require('../../routes/films.js')

describe('Films', () => {
  let films

  beforeEach(() => {
    films = new Films()
  })

  describe('.readFilms()', () => {
    it('exists', () => {
      expect(films.readFilms()).toEqual('films')
    })
  })
})
