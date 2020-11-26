import express from 'express';
import products from './products.controller';
import protectRoute from '../../middleware/protect.route'
import { rawMaterialSchema } from '../../middleware/user.validation'

const ProductsRouter = express.Router();

ProductsRouter.post('/add/raw-material', rawMaterialSchema, protectRoute.verifyUser, protectRoute.verifyOperator, products.addRawMaterial)

export default ProductsRouter;