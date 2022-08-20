const axios = require('axios')
const logger = require('./logger')

const getThreeDaysForecast = async (locationKey) => {
  const fName = 'getThreeDaysForecast'
  try {
    logger.info(`[${fName}] - ${locationKey}`)
    const { ACCU_WEATHER_URL, ACCU_WEATHER_API } = process.env
    const weather = await axios
      .get(`${ACCU_WEATHER_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${ACCU_WEATHER_API}`)
    if (!weather.data.DailyForecasts) return null

    const res = {}
    res.dailyForecast = weather.data.DailyForecasts.slice(0, 3)

    return res
  } catch(e) {
    logger.error(`[${fName}] - ${e}`)
  }
}

module.exports = { getThreeDaysForecast }
