import db from '../db/models';
import { verifyToken } from '../helpers/tokenize';

export default class protectRoute {
    static async verifyUser(req, res, next) {
        try {
            const { token } = req.headers;

            if (token === 'undefined') {
                return res.status.json({
                    status: 401,
                    message: 'no token provided'
                })
            }

            const payload = verifyToken(token);

            const user = await db.User.findOne({
                where: {
                    email: payload.email
                }
              });

            req.payload = payload;
            req.user = user;
            return next();
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                return res.status(400).json({
                    status: 400,
                    message: 'token must be provided and valid'
                })
            }
            return res.status(500).json({
                status: 500,
                message: 'Server Error'
            })
        }
    }

    static async verifyOperator(req, res, next) {
        try {
            const { user } = req;
            if ( user.role !== 'operator' ) {
                return res.status(401).json({
                    status: 401,
                    message: 'You are not authorized to perform this operation'
                })
            }
            return next();
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error'
            })
        }
    }

    static async verifyAdmin(req, res, next) {
        try {
            const { user } = req;
            if ( user.role !== 'admin' ) {
                return res.status(401).json({
                    status: 401,
                    message: 'You are not authorized to perform this operation'
                })
            }
            return next();
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error'
            })
        }
    }

    static async verifySuperAdmin(req, res, next) {
        try {
            const { user } = req;

            if ( user.role !== 'super admin' ) {
                return res.status(401).json({
                    status: 401,
                    message: 'You are not authorized to perform this operation'
                })
            }
            return next();
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error'
            })
        }
    }
}