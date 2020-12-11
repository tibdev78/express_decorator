import 'reflect-metadata';
import express from 'express';
import * as rg from './routes/register';


const app = express();

rg.registerController(app);

app.listen(3000, () => console.log('Server is running on port 3000'))
