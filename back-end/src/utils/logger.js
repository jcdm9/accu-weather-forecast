const { existsSync, mkdirSync } = require('fs')
const { createLogger, format, transports } = require('winston')
const { timestamp, combine, json, printf } = format

// logs path
const path = `${__dirname}/../../logs`

// create path if it does not exist
if (!existsSync(path)) {
  mkdirSync(path)
}

// initiate and export logger
module.exports = createLogger({
  format: combine(
    json(),
    timestamp(),
    printf(info => `[${info.timestamp}] ${info.level.toUpperCase()} : ${info.message}`)
  ),
  transports: [
    new transports.File({
      level: 'info',
      filename: `${path}/combined.log`,
    }),
    new transports.File({
      level: 'error',
      filename: `${path}/error.log`
    }),
    new transports.Console({
      level: 'debug'
    })
  ]
})
