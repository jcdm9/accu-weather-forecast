const logger = require('./../utils/logger')
const utils = require('./../utils/accu-weather')

const getForeCast = async (req, res, next) => {
  const fName = 'getForeCast'
  try {
    logger.info(`[${fName}] - ${JSON.stringify(req.params)}`)

    const result = await utils.getThreeDaysForecast(req.params.locationKey)
    res.status(200).json(result)
  } catch(e) {
    logger.error(`[${fName}] - ${e}`)
    next()
  }
}

module.exports = { getForeCast }
