import { Component, OnInit } from '@angular/core';
import { TickerSyncService } from 'src/app/services/ticker-sync.service';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit {

  company!: string;

  constructor(private tickerSync: TickerSyncService) { }

  ngOnInit() {
    this.tickerSync.currentTicker.subscribe(ticker => this.company = ticker)
  }

}
