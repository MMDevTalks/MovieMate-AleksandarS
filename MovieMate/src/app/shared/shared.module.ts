import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TintDirective } from './directives/tint.directives';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePosterComponent, ButtonComponent, IconComponent, TintDirective, AutoFocusDirective],
  exports: [MoviePosterComponent, ButtonComponent, IconComponent, TintDirective, AutoFocusDirective]
})
export class SharedModule { }
