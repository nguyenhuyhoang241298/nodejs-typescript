import express from 'express'
import { addUser, deleteUserById, editUserById, getAllUsers } from '~/controllers/users.controllers'

const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.post('/', addUser)
userRouter.put('/', editUserById)
userRouter.delete('/', deleteUserById)

export default userRouter
