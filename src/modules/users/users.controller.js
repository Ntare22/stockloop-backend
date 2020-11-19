
import db from '../../db/models';
import crypt from '../../helpers/crypt';



export default class UsersController {
    static async userList(req, res) {
        try {
            await db.User.findAll().then(user => res.json({
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

}

