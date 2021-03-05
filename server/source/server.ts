import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import apiRoutes from './routes/api';

const NAMESPACE = 'Server';
const router = express();

// Logging

router.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP = [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP = [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  });

  next();
});

// Parsing

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// Rules & CORS

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return res.status(200).json({});
  }

  next();
});

// Routes

router.use('/api', apiRoutes);

// Error Handling

router.use((req, res, next) => {
  const error = new Error('Not found');

  return res.status(404).json({
    message: error.message
  });
});

// Create Server

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
