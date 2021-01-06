import db from '../../db/models';
import crypt from '../../helpers/crypt';
import {getPagination} from '../../helpers/utils';



export default class UsersController {
    static async userList(req, res) {
        try {
            const { page, size,search } = req.query;
            await db.User.findAndCountAll(getPagination(page,size,search)).then(user => res.json({
                status: 200,
                message: 'success',
                user
            }));

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }
    static async findUser(req, res) {
        try {
            const id = req.params.id;
            await db.User.findOne({ where: { id } }).then(user => res.json({
                status: 200,
                message: 'success',
                user
            }));

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }
    static async createUser(req, res) {
        try {

            const {
                email,
                password,
                first_name,
                last_name,
                role,
                isAuthorized
            } = req.body;

            const existingUser = await db.User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({
                    status: 400,
                    message: 'User entered already exist, Try to use another email'
                })
            }

            await db.User.create({
                first_name, last_name, email, role, isAuthorized,
                password: crypt.hashPassword(password)
            }).then(user => res.json({
                status: 200,
                message: `User ${user.first_name} ${user.last_name} saved success`,
                user
            })).catch(e => {
                return res.status(500).json({
                    status: 500,
                    message: e.message || "Some error occurred while creating the User."
                })

            });

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }

    static async authorizeUser(req, res) {
        try {

            const id = req.params.id;
            const userdata = await db.User.findOne({ where: { id } });
            if (userdata) {
                if (userdata.isAuthorized) {
                    await db.User.update({ isAuthorized: false }, { where: { id } })
                        .then(user => res.json({

                            status: 200,
                            message: `User ${userdata.first_name} ${userdata.last_name} disabled success`
                        }))
                        .catch(e => res.status(500).json({
                            status: 500,
                            message: e.message || "Some error occurred while updating the User."
                        }));
                } else {
                    await db.User.update({ isAuthorized: true }, { where: { id } })
                        .then(user => res.json({

                            status: 200,
                            message: `User ${userdata.first_name} ${userdata.last_name} activated success`
                        }))
                        .catch(e => res.status(500).json({
                            status: 500,
                            message: e.message || "Some error occurred while updating the User."
                        }));
                }
            }


        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }

    static async deleteUser(req, res) {
        try {

            const id = req.params.id;

            await db.User.destroy({ where: { id } }).then(user => res.json({
                status: 200,
                message: 'User Deleted Success'
            })).catch(e => res.status(500).json({
                status: 500,
                message: e.message || "Some error occurred while deleting the User."
            }));
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }
    static async updateUser(req, res) {
        try {

            const id = req.params.id;

            await db.User.update(req.body, { where: { id } }).then(user => res.json({
                status: 200,
                message: `User ${req.body.first_name} ${req.body.last_name} updated success`,
                user:req.body
            })).catch(e => res.status(500).json({
                status: 500,
                message: e.message || "Some error occurred while deleting the User."

            }));
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }

    static async resetPassword(req, res) {
        try {
            const { 
                email, 
                password 
            } = req.body;

            const existingUser = await db.User.findOne({ where: { email }})

            if (!existingUser) {
                return res.status(401).json({
                    status: 401,
                    message: 'User does not exist'
                })
            }

            await db.User.update({ password: crypt.hashPassword(password) }, { where: { email }})

            return res.status(200).json({
                status: 200,
                message: 'Password has been reset'
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }

    static async viewInfo(req, res) {
        try {
            const { user } = req;
            const userInfo = user.dataValues;

            return res.status(200).json({
                status: 200,
                message: 'User successfully retrived',
                user: {
                    'first_name': userInfo.first_name,
                    'last_name': userInfo.last_name,
                    'email': userInfo.email,
                    'role': userInfo.role
                }
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            }) 
        }
    }

}

