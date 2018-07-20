const DataStore = require('./dataStore')

class Films {
  constructor (dataStore = new DataStore()) {
    this.dataStore = dataStore
  }

  async readFilms (number = 0) {
    let allEpisodes = await this.dataStore.get()
    if (number > 0) {
      return this._filterResults(allEpisodes, number)
    }
    return allEpisodes
  }

  _filterResults (allEpisodes, number) {
    number = Number(number)
    let data = allEpisodes.filter(episode => episode.season === number)
    return data
  }
}

module.exports = Films
