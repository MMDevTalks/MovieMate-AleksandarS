import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from '@movies/shared';
import { AppComponent } from './app.component';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';


@NgModule({
  declarations: [
    AppComponent,
    ProxyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
