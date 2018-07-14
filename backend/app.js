const express = require('express')
const app = express()
const Films = require('./models/films')

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.get('/films', async (req, res) => {
  let films = new Films()
  let data = await films.readFilms()
  res.status(200).json(data)
})

module.exports = app
