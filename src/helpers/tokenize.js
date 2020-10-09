import jwt from 'jsonwebtoken';
import env from '../env';

export const tokenize = (email, role, isAuthorized) => {
    return jwt.sign({ email, role, isAuthorized }, env.JWTKEY, { expiresIn: '1d'})
}

export const verifyToken = token => jwt.verify(token, env.JWTKEY);