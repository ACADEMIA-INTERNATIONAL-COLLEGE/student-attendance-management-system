import express from 'express';
import './config/instrument.js';
import * as Sentry from '@sentry/node';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

Sentry.setupExpressErrorHandler(app);

export default app;
