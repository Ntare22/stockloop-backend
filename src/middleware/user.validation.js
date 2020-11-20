import joi from 'joi'
import validateRequest from '../helpers/validation.request'

export const createUserSchema=(req, res, next)=> {
            const schema = joi.object({
                first_name:joi.string().required(),
                last_name :joi.string().required(),
                email:joi.string().email().required(),
                role: joi.string().valid('Super','Admin', 'Operator').required(),
                password:joi.required(),
                isAuthorized:joi.boolean()
            });
            validateRequest(req, res, next, schema);
        }
    
export const rawMaterialSchema= (req, res, next) => {
    const schema = joi.object({
        name: joi.string().required(),
        quantity: joi.number().required(),
        unit: joi.string().required(),
        unit_price: joi.number().required()
    });
    validateRequest(req, res, next, schema)
}