import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@movies/shared';
import { MovieService } from './movie.service';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SvgDefinitionsComponent, HeaderComponent, SearchComponent],
  exports: [SvgDefinitionsComponent, HeaderComponent],
  providers: [MovieService]
})
export class CoreModule { }
