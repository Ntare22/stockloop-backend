/* eslint-disable no-undef */
import dotenv from 'dotenv-extended';
import { resolve } from 'path';

dotenv.load({
    silent: true,
    defaults: resolve(__dirname, '../.env'),
    schema: resolve(__dirname, '../.env.sample'),
    errorOnExtra: false,
    errorOnRegex: false,
    includeProcessEnv: true,
    overrideProcessEnv: true,
});

export default {
    ...process.env,
    PORT: process.env.PORT,
    BACKEND_URL: process.env.BACKEND_URL,
    TEST_DB: process.env.TEST_DB,
    DEV_DB: process.env.DEV_DB,
    DATABASE_URL: process.env.DATABASE_URL,
    BASE_URL: process.env.BASE_URL,
    SALT: process.env.SALT,
    JWTKEY: process.env.JWTPRIVATEKEY
}
