import express, { Router } from 'express';
import controller from '../controllers/api';

const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);
router.get('/tickersQuery', controller.tickersQuery);
router.post('/tickerFilling', controller.tickerFilling);
router.post('/fillingInfo', controller.getFillingInfo);

// FetchServerService route

export = router;
