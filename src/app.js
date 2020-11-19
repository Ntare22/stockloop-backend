import express from 'express';
import HomeRouter from './modules/home';
import AuthRouter from './modules/auth';
import UserRouter from './modules/users';

const App = express.Router();
App.use(HomeRouter);
App.use(AuthRouter);

App.use('/user',UserRouter);

App.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: `Path not found; METHOD ${req.method}, PATH: ${req.originalUrl}`
    });
});


export default App;
