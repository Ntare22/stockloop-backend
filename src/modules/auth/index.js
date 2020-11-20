import express from 'express';
import auth from './auth.controller';

const AuthRouter = express.Router();

AuthRouter.post('/login', auth.login);

export default AuthRouter;
