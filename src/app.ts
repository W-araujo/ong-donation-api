import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../src/routes/index';
import createConnection from './database';
import 'reflect-metadata';

import { error } from './middlewares/appErrors';

import dotenv from 'dotenv';
dotenv.config();

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

export default app;
