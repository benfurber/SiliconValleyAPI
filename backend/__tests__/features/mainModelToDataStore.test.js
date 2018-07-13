const request = require('supertest')
const app = require('../../app.js')

describe('app', () => {
  describe('/', () => {
    it('responds to the get method', async () => {
      let response = await request(app).get('/')

      expect(response.statusCode).toEqual(200)
    })
  })
})
