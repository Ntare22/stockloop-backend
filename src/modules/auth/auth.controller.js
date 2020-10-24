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

            // if (!existingUser) {
            //     return res.status(401).json({
            //         status: 401,
            //         message: 'User entered does not exist, contact admin to register'
            //     })
            // }

            const { role, isAuthorized } = existingUser;
            const token = tokenize(email, role, isAuthorized);


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
}