import { Request, Response, NextFunction, json } from 'express';
import logging from '../config/logging';
import router from '../routes/api';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import * as requests from 'request-promise';

const NAMESPACE = 'API Controller';
const tickersURL = 'https://www.sec.gov/files/company_tickers.json';


const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Sample health check route called.`);

  return res.status(200).json({
    message: 'sample health query'
  });
};

const tickersQuery = async (req: Request, res: Response, next: NextFunction) => {
  let SECData;

  logging.info(NAMESPACE, `Ticker query route called.`);
  
  const fetchSECFile = async () => {
    const request = await fetch(tickersURL);
    const body = await request.json();
    SECData = body;
  }
  
  await fetchSECFile().catch(err => {
    if (err) {
      let body = getJsonFile();
    }
  })
    
  return res.status(200).json({
    message: SECData
  });
};

const tickerFilling = async (req: Request, res: Response, next: NextFunction) => {
  
  logging.info(NAMESPACE, `Ticker filling route called.`);

  let fillingData: Object;
  let _CIK = req.body;
  let CIK = _CIK['cik'];
  let fCIK = CIK.padStart(10, '0');

  let jsonURL = `https://data.sec.gov/submissions/CIK${fCIK}.json`;
  console.log(jsonURL)
  const fetchFillings = async (url: string) => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      return jsonData;
    }
    catch {
      console.error('json error');
    }
  }

  fillingData = await fetchFillings(jsonURL);

  return res.status(200).json({
    message: fillingData
  })
}

const getJsonFile = (): any => {
  let body = fs.readFile('./companies.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('got companies json')
    return data;
  })
  console.log('getjsonfile', body);
  return body;
}

const getFillingInfo = async (req: Request, res: Response, next: NextFunction) => {}

export default {
  sampleHealthCheck,
  tickersQuery,
  tickerFilling,
  getFillingInfo
};
