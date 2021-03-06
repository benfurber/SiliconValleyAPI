const express = require('express')
const app = express()
const Films = require('./models/films')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World')
})

app.get('/episodes', async (req, res, next) => {
  let films = new Films()
  let data = await films.readFilms()
  res.status(200).json(data)
})

app.get('/episodes/season/:number', async (req, res, next) => {
  let films = new Films()
  let data = await films.readFilms(req.params.number)
  res.status(200).json(data)
})

app.get('*', (req, res, next) => {
  res.status(404).send('Not found')
})

module.exports = app
