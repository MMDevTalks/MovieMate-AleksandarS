import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class MovieService {

  constructor(private _httpClient: HttpClient) { }

  getNowPlayingMovies() {
    const params = new HttpParams();
    return this._httpClient.get(`movie/now_playing`)
    .map((response: any) => response.results);
  }

}
