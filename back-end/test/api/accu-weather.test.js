const request = require('supertest')
const { expect } = require('chai')
const server = require('./../../src/index')

describe('AccuWeather Forecast API', () => {
  describe('GET /api/accu-weather', () => {
    it('responds with status 200', (done) => {
      request(server)
        .get('/api/accu-weather/264885')
        .expect(200, done)
    })

    it('responds with status 404 if location parameter is missing', (done) => {
      request(server)
        .get('/api/accu-weather')
        .expect(404, done)
    })

    it('responds with 3 day weather forecast', (done) => {
      request(server)
        .get('/api/accu-weather/264885')
        .then(res => {
          expect(res.body.dailyForecast.length).to.equal(3)
          done()
        })
        .catch(err => done(err))
    })
  })
})
