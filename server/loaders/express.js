import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import config from '../config/index.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
//import routes from '../api/index.js'

export default (app) => {
  app.use(
    cors({
      credentials: true,
    })
  )

  app.use(morgan('combined'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(express.static(path.join(path.resolve(), 'public')))
  app.use(bodyParser.json())
  app.use(cookieParser(process.env.COOKIE_SECRET))
}
