import db from '../../db/models';

export default class ProductsController {
    static async addRawMaterial(req, res) {
        try {
            const {
                name,
                quantity,
                unit,
                unit_price
            } = req.body;
            await db.Materials.create({
                name,
                quantity,
                unit,
                unit_price,
                cost: unit_price * quantity
            })
            return res.status(200).json({
                status: 200,
                message: 'Raw Material has been added'
            })

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Server Error. Get in contact with super admin'
            })
        }
    }
}