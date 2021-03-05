import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import router from '../routes/api';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

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
  
  // add morningstar api
  
  const fetchSECFile = async () => {
    const request = await fetch(tickersURL);
    const body = await request.json();
    SECData = body;
  }

  await fetchSECFile();

  return res.status(200).json({
    message: SECData
  });
};

const tickerFilling = async (req: Request, res: Response, next: NextFunction) => {
  
  logging.info(NAMESPACE, `Ticker filling route called.`);

  let fillingData: string[] = [];
  let _CIK = req.body;
  let CIK = _CIK['cik'];
  console.log(CIK);

  let fillingURL = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${CIK}&type=&dateb=&owner=include&count=100&search_text=`;

  const fetchFillings = async () => {
    const request = await fetch(fillingURL);
    const body = await request.text();
    const $ = cheerio.load(body);
    $('a').each((i, el: any) => {
      fillingData.push(el['attribs']['href']);
    })
  }

  await fetchFillings()

  return res.status(200).json({
    message: fillingData
  })
}

export default {
  sampleHealthCheck,
  tickersQuery,
  tickerFilling
};
