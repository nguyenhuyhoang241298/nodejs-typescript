import express from 'express'
import userRouter from './users.routes'

const appRouter = express.Router()

appRouter.use('/user', userRouter)

export default appRouter
