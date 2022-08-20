const logger = require('./../../utils/logger')

// validate if there is location parameter
const validate = async (req, res, next) => {
  const { locationKey } = req.params

  if (!locationKey) {
    logger.error(`[${fName}] - Missing location parameter`)
    res.status(404).json({ error: 'Missing location parameter.'})
  }

  next()
}

module.exports = { validate }
