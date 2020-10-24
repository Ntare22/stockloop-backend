import express from 'express';
import users from './users.controller'
import { validateUserFields } from '../../middleware/user.validation'

const UserRouter = express.Router();


UserRouter.get('/list', users.userList)
UserRouter.post('/create', users.createUser)
UserRouter.put('/update', users.updateUser)
UserRouter.delete('/delete:id', users.deleteUser)

export default UserRouter;