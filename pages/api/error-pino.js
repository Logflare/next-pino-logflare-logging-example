import logger from '../../logger/logger'

export default function handler(req, res) {

    // Lets log an error with pino here.
    try {
        throw new Error('Whoops! Error with pino.')
    } catch (e) {
        const onlyPino = require('pino')()

        onlyPino.error(e)
    }

    res.status(200).json({ error: 'true' })
}