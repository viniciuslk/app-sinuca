import * as express from 'express'
import * as cors from 'cors'
import { createConnection } from 'typeorm'

import { httpErrorMiddleware } from './common/error'

import routes from './routes'

class App {
  express: express.Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.errorHandling()
    console.log(`Application successfuly started at: ${new Date()}`)
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_DATABASE_NAME,
      entities: [__dirname + '/modules/**/*.entity.ts'],
      synchronize: true
    })
  }

  private routes(): void {
    this.express.use(routes)
  }

  private errorHandling() {
    this.express.use(httpErrorMiddleware)
  }
}

export default new App().express
