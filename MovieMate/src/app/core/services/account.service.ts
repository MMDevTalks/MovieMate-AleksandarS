import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  constructor(private _httpClient: HttpClient) { }

  getAccount(): Observable<any> {
    return this._httpClient.get('account');
  }

}
