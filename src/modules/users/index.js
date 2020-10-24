import express from 'express';
import {createUser} from './users'

const UserRouter = express.Router();

UserRouter.post('/users', createUser)

export default UserRouter;