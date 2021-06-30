This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You'll find various logging examples from the client and the server with `console`, only `pino` and `pino-logflare`.

You can get client and server side logs going to Logflare from one `logger` interface with the config found here:

https://github.com/Logflare/next-pino-logflare-logging-example/blob/main/logger/logger.js

## Deploy with Logflare on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&integration-ids=oac_yEwf1AmqJMbRs2rkmnePdNK3)

## Setup a Log Drain

When you deploy from here, it will make you setup the Logflare integration. This does not automatically setup a log drain for you. Visit your Logflare account and setup a log drain.

[Manage your log drains with Logflare](https://logflare.app/integrations/vercel/edit) ➡️

![Manage Log Drains with Logflare](https://logflare.app/images/marketing/guides/vercel-setup/create-vercel-log-drain.png)

## Server Side Logging

Explore various ways to log data and errors from the server side:

https://github.com/Logflare/next-pino-logflare-logging-example/tree/main/pages/api

## Client Side Logging

When setup `pino-logflare` will send your cient-side logs to Logflare as well:

https://github.com/Logflare/next-pino-logflare-logging-example/blob/main/pages/index.js