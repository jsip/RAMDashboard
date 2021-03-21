import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdgarPreviewService {

  constructor(private http: HttpClient) { }

  getFillingInfo(url: string[]) {
    return this.http.post('http://localhost:1338/api/fillingInfo', {'url': url});
  }

}
