import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    const request_token = this._route.snapshot.queryParams['request_token'];
    if (request_token && !this._route.snapshot.queryParams['denied']) {
      this._authService.getSession(request_token).subscribe(response => {
        this._router.navigate(['/home']);
      });
    }
  }

  login(): void {
    this._authService.getRequestToken().subscribe();
  }

}
