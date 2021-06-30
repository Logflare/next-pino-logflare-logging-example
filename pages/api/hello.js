// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '../../logger/logger'

export default function handler(req, res) {
  resp.status(200)

  const data = {
    request: {
      method: req.method,
      url: req.url
    },
    response: {
      status: res.statusCode
    }
  }

  // Logging to pino-logflare
  logger.info(data, "Handled response. Logged with pino-logflare.")

  // Logging with pino. Both will end up in Vercel's log drains with slight different payloads.
  // Both will end up Logflare if a log drain is setup.
  const onlyPino = require('pino')()

  onlyPino.info(data, "Handled response. Logged with pino.")

  // We can also simply parse our object into JSON and log it with console.
  console.info(JSON.stringify(data), "Handled response. Logged with `console`.")

  res.json({ name: 'John Doe' })
}
