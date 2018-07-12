const Films = require('../../routes/films.js')

describe('Films', () => {
  let films = new Films()

  it('connects to the dataStore', () => {
    let connectionSpy = jest.spyOn(films.dataStore, 'get')
    films.readFilms()
    expect(connectionSpy).toHaveBeenCalled()
  })
})
