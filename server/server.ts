// Set node_env environment variable to development, if not already set

import './config/env';

import http from 'http';

import cors from 'cors';
import express from 'express';

import configureRoutes from './routes';
import configureSocketIO from './socket-io';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const port = process.env.SERVER_PORT;
const app = express();

app.use(
  cors({
    origin: process.env.SERVER_CORS_ORIGINS.toLowerCase().split(','),
    credentials: process.env.SERVER_CORS_CREDENTIALS.toLowerCase() === 'true',
  })
);

app.use(configureRoutes);

const server = http.createServer(app);
configureSocketIO(server);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Listening on port ${port}`));
