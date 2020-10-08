import express from 'express';
// import swagger from './helpers/swagger.config';
import HomeRouter from './modules/home';

const App = express.Router();

// App.use('/api-docs', swagger);
App.use(HomeRouter);

export default App;