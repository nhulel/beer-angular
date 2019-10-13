import { Injectable } from '@angular/core';
import { BEERS } from './beer-list/mocks';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  getBeers() {
    return this.http.get('https://test-7ffd9.firebaseio.com/beers.json')
    
    ;
  }
}
