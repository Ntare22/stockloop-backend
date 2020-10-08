import express from 'express';
import HomeRouter from './modules/home';

const App = express.Router();

App.use(HomeRouter);

export default App;
