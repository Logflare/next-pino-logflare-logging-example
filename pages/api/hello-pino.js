// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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

  // Logging with straight pino. 
  // Both will end up in Vercel's log drains with slight different payloads.

  const onlyPino = require('pino')()

  onlyPino.info(data, "Handled response. Logged with pino.")

  res.json({ name: 'John Doe' })
}
