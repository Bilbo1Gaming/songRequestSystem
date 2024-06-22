import { Hono } from 'hono'
import { renderToString } from 'react-dom/server';
import { serveStatic } from 'hono/bun'

import Logger from 'louis-log';

import ReqPage from "./views/index"

const logger = new Logger("SongRequestSystem", "index")

logger.log("started!")


const app = new Hono()

app.use('/static/*', serveStatic({ root: './src/public' }))


app.get('/', (c) => {
  logger.debug(ReqPage)
  return c.html(renderToString(ReqPage))
})

export default app
