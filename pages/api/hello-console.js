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

  // We can also simply parse our object into JSON and log it with console.

  console.info(JSON.stringify(data), "Handled response. Logged with `console`.")

  res.json({ name: 'John Doe' })
}
