import express from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import Entities from './entity'
import env from './config/env'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { applyMiddleware, applyRoutes } from './utils'
import routes from './routes'
import middleware from './middleware'
import errorHandlers from './middleware/errorHandlers'
dotenv.config()

process.on('uncaughtException', (e) => {
  console.log(e)
  process.exit(1)
})
process.on('unhandledRejection', (e) => {
  console.log(e)
  process.exit(1)
})

createConnection({
  name: 'default',
  type: 'postgres',
  url: env.PG_URL,
  namingStrategy: new SnakeNamingStrategy(),
  entities: Entities,
}).then(async (connection) => {
  console.log(`Connected to PostgreSQL database.`)

  await connection.synchronize()

  const server = express()

  applyMiddleware(middleware, server)
  applyRoutes(routes, server)
  applyMiddleware(errorHandlers, server)

  const { PORT = 3001 } = process.env

  server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
})
