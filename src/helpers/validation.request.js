
export default function validateRequest(req,res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, null);
    console.log(">>>>> Error ::"+error)
    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.details.map(x => x.message.replace('"',"").replace('" '," ")).join(', ')
        })
    } else {
        req.body = value;
        next();
    }
}