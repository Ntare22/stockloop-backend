import localStorage from 'localStorage';
import db from '../../db/models';
import crypt from '../../helpers/crypt';
import { tokenize } from '../../helpers/tokenize';

export default class AuthController {
    static async login(req, res) {
        try {
            const {
                email,
                password,
            } = req.body;

            const existingUser = await db.User.findOne({ where: { email }  });
            const { role, isAuthorized } = existingUser.dataValues;

            const token = tokenize(email, role, isAuthorized);
            localStorage.setItem('token', token);

            crypt.decodePassword(password, existingUser.password) ? res.status(200).json({
                status: 200,
                message: 'User is successfully logged in',
                token: token
            }) : res.status(401).json({
                status: 401,
                message: 'Incorrect email or password'
            })
            

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }

    static async logout(req, res){
        localStorage.removeItem('token');
        return res.status(200).json({
            status: 200,
            message: 'User is successfully logged out'
        })
    }
}
