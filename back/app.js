import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import sqlRouter from './routes/sql';

const connection = require('./helpers/sql');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sql', sqlRouter);

export default app;

