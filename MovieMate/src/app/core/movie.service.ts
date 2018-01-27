import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MOVIES } from '../mocks';

import 'rxjs/add/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Observable<Array<any>> {
    return Observable.of(MOVIES);
  }

}
