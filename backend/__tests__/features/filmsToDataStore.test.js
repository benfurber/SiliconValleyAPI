const Films = require('../../models/films.js')

describe('Films', () => {
  let films = new Films()

  it('connects to the dataStore', () => {
    let connectionSpy = jest.spyOn(films.dataStore, 'get')
    films.readFilms()
    expect(connectionSpy).toHaveBeenCalled()
  })

  it('returns an object from the dataStore', async () => {
    let expectedOutput = await films.readFilms()
    expect(typeof expectedOutput).toEqual('object')
  })

  it('returned object contains name, image and season for each epidsode', async () => {
    let expectedOutput = await films.readFilms()
    expect(typeof expectedOutput[0].name).toEqual('string')
    expect(typeof expectedOutput[0].image).toEqual('string')
    expect(typeof expectedOutput[0].season).toEqual('number')
  })
})
