const fs = require('fs')

class DataStore {
  constructor (filepath = './store/silicon-valley.json') {
    this.filepath = filepath
  }

  async get () {
    let response = await this._getFile(this.filepath)
    response = this._parseData(response)
    return response
  }

  _getFile (filepath) {
    let data = fs.readFileSync(filepath, 'utf8')
    data = JSON.parse(data)._embedded.episodes
    return data
  }

  _parseData (data) {
    return data.map((episode) => {
      return {
        name: episode.name,
        image: episode.image.medium,
        season: episode.season,
        episode: episode.number
      }
    })
  }
}

module.exports = DataStore
