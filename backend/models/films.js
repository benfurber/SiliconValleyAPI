const DataStore = require('./dataStore')

class Films {
  constructor (dataStore = new DataStore()) {
    this.dataStore = dataStore
  }

  readFilms () {
    return this.dataStore.get()
  }
}

module.exports = Films
