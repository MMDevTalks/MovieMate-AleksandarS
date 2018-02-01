import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'app/shared';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../core/header/header.component';
import { SearchComponent } from '../core/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent
  ]
})
export class HomeModule { }
