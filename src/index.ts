import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import http from 'http'
import createError from 'http-errors'
import logger from 'morgan'
import path from 'path'
import appRouter from './routes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// router
app.use('/', appRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(500)
  res.json({ error: err })
})

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log('Server running...')
})
