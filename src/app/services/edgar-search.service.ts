import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// https://www.sec.gov/edgar/search/#/dateRange=custom&entityName=AAPL&startdt=1995-06-01&enddt=2021-03-03
// https://www.sec.gov/edgar/search/#/dateRange=custom&entityName=CAT&startdt=1995-06-01&enddt=2021-03-03
// https://www.sec.gov/edgar/search/#/dateRange=custom&entityName=CRM&startdt=1995-06-01&enddt=2021-03-03
// https://efts.sec.gov/LATEST/search-index
// https://www.sec.gov/files/company_tickers.json
// https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001321655&type=&dateb=&owner=include&count=100&search_text=

@Injectable({
  providedIn: 'root'
})
export class EdgarSearchService {

  constructor(private http: HttpClient) { }

  fetchTickers() {
    return this.http.get('http://localhost:1338/api/tickersQuery');
  }

  fetchFillings(cik: string) {
    return this.http.post('http://localhost:1338/api/tickerFilling', {'cik': cik});
  }
}
