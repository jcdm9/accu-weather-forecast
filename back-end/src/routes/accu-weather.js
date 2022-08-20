const express = require('express')
const router = express.Router()
const accuWeatherController = require('./../controllers/accu-weather')
const middleware = require('./../middleware/accu-weather')

/**
 * @swagger
 * /api/accu-weather/{locationKey}:
 *  get:
 *    summary: Returns weather forecast for three days
 *    parameters:
 *      - in: path
 *        name: locationKey
 *        schema:
 *          type: string
 *          example: 264885
 *        required: true
 *        description: location id
 *    responses:
 *      200:
 *        description: weather forecast
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: string
 */
router.get('/:locationKey', middleware.validate, accuWeatherController.getForeCast)

module.exports = router
