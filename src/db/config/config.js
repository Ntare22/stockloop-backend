const dotenv = require('dotenv');
dotenv.config();

module.exports =  {
    development: {
        url: process.env.DEV_DB,
        dialect: 'postgres',
        logging: false
    },
    test: {
        url: process.env.TEST_DB,
        dialect: 'postgres',
        logging: false
    },
    production: {
        url: process.env.PROD_DB,
        dialect: 'postgres',
        logging: false
    }
}