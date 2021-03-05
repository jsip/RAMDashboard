import { Component, OnInit } from '@angular/core';
import { TickerSyncService } from 'src/app/services/ticker-sync.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  company!: string;

  constructor(private tickerSync: TickerSyncService) { }

  ngOnInit() {
    this.tickerSync.currentTicker.subscribe(ticker => this.company = ticker)
  }

}
