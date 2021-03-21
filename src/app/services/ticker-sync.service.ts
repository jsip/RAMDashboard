import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerSyncService {

  public tickerSource = new BehaviorSubject<string>('');
  public currentTicker = this.tickerSource.asObservable();

  constructor() { }

  changeTicker(ticker: string) {
    this.tickerSource.next(ticker);
    console.log(ticker);
  }

}
