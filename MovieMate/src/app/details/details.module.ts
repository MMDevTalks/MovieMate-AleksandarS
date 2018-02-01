import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from '@movies/shared';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule { }
