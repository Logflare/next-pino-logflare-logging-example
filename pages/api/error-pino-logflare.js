import logger from '../../logger/logger'

export default function handler(req, res) {

    // Lets log an error with pino-logflare here.

    try {
        throw new Error('Whoops! Error with pino-logflare.')
    } catch (e) {
        logger.error(e)
    }

    res.status(500).json({ error: 'true' })
}