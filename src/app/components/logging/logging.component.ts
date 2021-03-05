import { Component, OnInit } from '@angular/core';
import { TickerSyncService } from 'src/app/services/ticker-sync.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  company!: string;

  constructor(private tickerSync: TickerSyncService) { }

  ngOnInit() {
    this.tickerSync.currentTicker.subscribe(ticker => this.company = ticker)
  }

}
