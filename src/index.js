import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import env from './env';
import App from './app';
import swaggerDoc from './helpers/swagger.config';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json());
app.use(bodyParser.text());
swaggerDoc(app);
app.use(App);

const server = app.listen(env.PORT, () => {
    console.log('server running at port', env.PORT)
});

export default server;
