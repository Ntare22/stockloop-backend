import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import env from '../env';

const swaggerDef = {
    info: {
        title: 'StockLoop Backend API',
        version: '1.0.0',
        description: 'Inventory Management System made easy'
    },
    host: env.BASE_URL,
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorize',
            scheme: 'bearer',
            in: 'header',
        },
    },
}

const options = {
    swaggerDefinition: swaggerDef,
    apis: ['./src/modules/**/*.swagger.js']
}
const swaggerDoc = swaggerJSDoc(options);

const swagger = app => app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDoc));

export default swagger;