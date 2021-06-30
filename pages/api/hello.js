// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '../../logger/logger'

export default function handler(req, res) {
  res.status(200)

  // Logging to pino-logflare
  logger.info({
    requst: {
      method: req.method,
      path: req.path
    },
    response: {
      status: res.status
    }
  }, "Handled response. Logged with pino-logflare.")

  // Logging with pino. Both will end up in Vercel's log drains with slight different payloads.
  // Both will end up Logflare if a log drain is setup.
  const onlyPino = require('pino')()

  onlyPino.info({
    requst: {
      method: req.method,
      path: req.path
    },
    response: {
      status: res.status
    }
  }, "Handled response. Logged with pino.")

  res.json({ name: 'John Doe' })
}
