// libraries
const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const app = express()

// swagger https://swagger.io/specification/#infoObject
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AccuWeather Forecast API',
      description: 'Back-end examination',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ["./src/routes/*.js"],
}

const specs = swaggerJsDoc(options)

// routes
const accuWeatherRoute = require('./routes/accu-weather')

// api
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api/accu-weather', accuWeatherRoute)

module.exports = app
