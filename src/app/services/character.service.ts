import { Injectable } from '@angular/core';

import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  result: any;

  constructor(private _http: HttpClient) { }

  getCharacters() {
    console.log (this._http.get('/api/characters')
      .map(result => this.result as Object[] || []));
    return this._http.get('/api/characters')
      .map(result => this.result as Object[] || []);
  }
}
