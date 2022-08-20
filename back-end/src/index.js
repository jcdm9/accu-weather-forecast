require('dotenv').config()
const server = require('./server')

// utilities
const logger = require('./utils/logger')

// env
const { URL, PORT } = process.env

server.listen(PORT, () => {
  logger.info(`AccuWeather Forecast API is running at ${URL}:${PORT}`)
  logger.info(`AccuWeather Forecast API Documentation is running at ${URL}:${PORT}/api-docs`)
})

module.exports = server
