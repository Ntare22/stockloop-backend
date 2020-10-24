import { check } from 'express-validator'

export const validateUserFields = [
    check("first_name").notEmpty,
    check("last_name").notEmpty,
    check("email").isEmail(),
    check("role").notEmpty,
    check("password").notEmpty
]