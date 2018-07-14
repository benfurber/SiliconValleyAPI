const request = require('supertest')
const app = require('../../app.js')

describe('app', () => {
  describe('/', () => {
    it('responds to the get method', async () => {
      let response = await request(app).get('/')

      expect(response.statusCode).toEqual(200)
    })
  })

  describe('/episodes', () => {
    it('responds with JSON', async () => {
      let response = await request(app).get('/episodes')
      let data = JSON.parse(response.res.text)

      expect(typeof data).toEqual('object')
    })
  })

  describe('/episodes/season/', () => {
    it('responds with JSON for only an individual season', async () => {
      let response = await request(app).get('/episodes/season/2')
      let data = JSON.parse(response.res.text)

      expect(typeof data).toEqual('object')
    })
  })

  describe('/anything-else', () => {
    it('responds with a 404', async () => {
      let response = await request(app).get('/12331e')

      expect(response.statusCode).toEqual(404)
    })
  })
})
