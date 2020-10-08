import express from 'express';

const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to StockLoop Backend API'
    });
});

HomeRouter.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: `Path not found; METHOD ${req.method}, PATH: ${req.originalUrl}`
    });
});

export default HomeRouter;