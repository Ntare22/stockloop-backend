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
            validateRequest(req,res, next, schema);
        }
    
