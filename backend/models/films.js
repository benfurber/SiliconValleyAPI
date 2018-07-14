const DataStore = require('./dataStore')

class Films {
  constructor (dataStore = new DataStore()) {
    this.dataStore = dataStore
  }

  readFilms (number = 0) {
    let allEpisodes = this.dataStore.get()
    if (number > 0) {
      return this._filterResults(allEpisodes, number)
    }
    return allEpisodes
  }

  _filterResults (allEpisodes, number) {
    return allEpisodes.filter(episode => episode.season === number)
  }
}

module.exports = Films
