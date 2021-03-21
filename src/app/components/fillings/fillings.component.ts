import { Component, OnInit } from '@angular/core';
import { EdgarPreviewService } from 'src/app/services/edgar-preview.service';
import { EdgarSearchService } from 'src/app/services/edgar-search.service';
import { TickerSyncService } from 'src/app/services/ticker-sync.service';

@Component({
  selector: 'app-fillings',
  templateUrl: './fillings.component.html',
  styleUrls: ['./fillings.component.scss']
})
export class FillingsComponent implements OnInit {

  company!: string;
  links: string[] = [];

  constructor(
    private tickerSync: TickerSyncService,
    private edgarSearch: EdgarSearchService,
    private edgarPreview: EdgarPreviewService
  ) { }

  ngOnInit() {
    this.tickerSync.currentTicker.subscribe(ticker => {
      this.company = ticker;
      if (ticker.length > 0) {
        let _cik: any = ticker.match(/\d+/g);
        let cik: any = _cik[0];
        this.edgarSearch.fetchFillings(cik).subscribe(data => this.filterLinks(data));
      }
    })
  }

  filterLinks(links: Object) {
    Object.values(links).forEach((_link: string[]) => {
      _link.forEach(link => {
        if (link.startsWith('/Archives')) {
          let _l = `https://www.sec.gov${link}`;
          this.links = [...this.links, _l];
        }
      })
    })
    this.edgarPreview.getFillingInfo(this.links).subscribe(data => {
        console.log(data, this.links);
    })
  }

}