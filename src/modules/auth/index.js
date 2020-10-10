import express from 'express';
import AuthController from './auth.controller';

const AuthRouter = express.Router();

AuthRouter.post('/login', AuthController.login);

export default AuthRouter;
