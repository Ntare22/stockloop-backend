import express from 'express';
import users from './users.controller'
import {createUserSchema} from '../../middleware/user.validation'

const UserRouter = express.Router();


UserRouter.get('/list', users.userList)
UserRouter.get('/find/:id', users.findUser)
UserRouter.post('/create',createUserSchema, users.createUser)
UserRouter.put('/update/:id',createUserSchema, users.updateUser)
UserRouter.delete('/delete/:id', users.deleteUser)
UserRouter.patch('/authorize/:id', users.authorizeUser)

export default UserRouter;