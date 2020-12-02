import express from 'express';
import auth from './auth.controller';

const AuthRouter = express.Router();

AuthRouter.post('/login', auth.login);
AuthRouter.get('/logout', auth.logout)

export default AuthRouter;
