import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '@movies/shared';
import { MovieService, AuthService } from '@movies/services';
import { AuthInterceptor } from './services/auth.interceptor';
import { AccountService } from './services/account.service';
import { accountLoader } from './account.loader';
import { AuthGuard } from './guards/auth.guard';
import { AnonymousGuard } from './guards/anonymous.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    MovieService,
    AccountService,
    AuthService,
    AuthGuard,
    AnonymousGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
