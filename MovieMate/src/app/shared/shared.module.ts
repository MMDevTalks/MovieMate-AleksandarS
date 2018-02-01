import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { TintDirective } from './directives/tint.directives';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, ButtonComponent, IconComponent, SvgDefinitionsComponent, TintDirective, AutoFocusDirective],
  exports: [MoviePosterComponent, ButtonComponent, IconComponent, SvgDefinitionsComponent, TintDirective, AutoFocusDirective]
})
export class SharedModule { }
