import dotenv from 'dotenv-extended';
import { resolve } from 'path';

const envName = (process.env.NODE_ENV || '').toLowerCase();
const path = resolve(__dirname, `../.env.${envName}`)
const isTest = envName === 'test';
const isDevelopment = envName === 'development';

dotenv.load({
    silent: true,
    path,
    defaults: resolve(__dirname, '../.env'),
    schema: resolve(__dirname, '../.env.sample'),
    errorOnMissing: !isTest,
    errorOnExtra: false,
    errorOnRegex: false,
    includeProcessEnv: true,
    overrideProcessEnv: true,
});

export default {
    ...process.env,
    PORT: isDevelopment || isTest ? 4000 : process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || 'production',
    isTest,
    isDevelopment,
    BACKEND_URL: process.env.BACKEND_URL,
}