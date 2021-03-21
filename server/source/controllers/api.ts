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

const getFillingInfo = async (req: Request, res: Response, next: NextFunction) => {

  logging.info(NAMESPACE, `Get filling info route called.`);

  let _url = req.body;
  let url = _url['url'];

  let types: string[] = [];
  let urls: string[] = [];

  const fetchFillingInfo = async (url: string[]) => {
    url.forEach(async (_u) => {
      console.log(_u);
      const request = await fetch(_u);
      const body = await request.text();
      const $ = cheerio.load(body);
      $('.tableFile').each((i: any, el: any) => {
        if (i == 0) {
          // types.push(el['children'][1]['children'][2]['children'][3]['children'][0]['data']);
          console.log(i, el['children'][1]['children'][2]['children'][3]['children']);
        }
        // urls.push(i, `https://www.sec.gov${el['children'][1]['children'][2]['children'][5]['children'][0]['attribs']['href']}`);
        console.log(i, el['children'][1]['children'][2]['children'][5]['children'][0]['attribs']['href']);
      })
    })
  }

  await fetchFillingInfo(url);

  return res.status(200).json({
    message: { types, urls }
  })
}

export default {
  sampleHealthCheck,
  tickersQuery,
  tickerFilling,
  getFillingInfo
};
