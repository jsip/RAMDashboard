import { Component, OnInit } from '@angular/core';
import { TickerSyncService } from 'src/app/services/ticker-sync.service';

@Component({
  selector: 'app-technicals',
  templateUrl: './technicals.component.html',
  styleUrls: ['./technicals.component.scss']
})
export class TechnicalsComponent implements OnInit {

  company!: string;

  constructor(private tickerSync: TickerSyncService) { }

  ngOnInit() {
    this.tickerSync.currentTicker.subscribe(ticker => this.company = ticker)
  }

}
