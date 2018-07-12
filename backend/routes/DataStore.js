const fs = require('fs')

class DataStore {
  constructor (filepath = './store/silicon-valley.json') {
    this.filepath = filepath
  }

  async get () {
    let response = await this._getFile(this.filepath)
    return response
  }

  _getFile (filepath) {
    let data = fs.readFileSync(filepath, 'utf8')
    data = JSON.parse(data)
    return data._embedded
  }
}

module.exports = DataStore
