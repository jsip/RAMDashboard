import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EdgarSearchService } from './services/edgar-search.service';
import { TickerSyncService } from './services/ticker-sync.service';
import { TickerGroup } from './interfaces/ticker-group';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tickerCtrl = new FormControl();
  filteredTickers: Observable<TickerGroup[]>;
  title = '🚀 RAMDashboard';
  company!: string;
  tickers: TickerGroup[] = [];

  constructor
  (
    private tickerSync: TickerSyncService,
    private edgarSearch: EdgarSearchService,
    private http: HttpClient
  ) {
    this.filteredTickers = this.tickerCtrl.valueChanges
      .pipe(
        startWith(''),
        map(ticker => this._filterTickers(ticker))
      );
  }

  ngOnInit() {
    this.getEdgarTickers();
    this.tickerSync.currentTicker.subscribe(ticker => this.company = ticker)
  }

  private _filterTickers(value: string): TickerGroup[] {
    const filterValue = this._normalizeValue(value);
    return this.tickers.filter(ticker => this._normalizeValue(ticker.title).includes(filterValue) || this._normalizeValue(ticker.ticker).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  getEdgarTickers() {
    this.edgarSearch.fetchTickers()
      .subscribe(tickerData => Object.values(tickerData)
        .forEach(el => {
        Object.values(el).forEach((comp: any) => {
          this.tickers.push(comp);
        })
      })
    );
  }

  onSubmit(e: any) {
    let company = `${e.option.__ngContext__[30]} | ${e.option.__ngContext__[31]} #${e.option.__ngContext__[32]}`;
    this.tickerSync.changeTicker(company)
  }

}
