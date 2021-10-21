// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import logger from "../../logger/logger";


export default function handler(req, res) {
  res.status(200)

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

  res.json({ name: 'John Doe' })
}
