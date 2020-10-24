import express from 'express';


const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to StockLoop Backend API'
    });
});

export default HomeRouter;