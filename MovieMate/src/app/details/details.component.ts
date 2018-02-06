import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { MovieService } from '@movies/services';
import { Colors } from '../shared/directives/color-extractor.directive';

@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie$: Observable<any>;
  @ViewChild('movieCover') movieCover: ElementRef;

  @HostListener('document:keydown', ['$event']) close(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.closeSelf();
    }
  }

  constructor(private _route: ActivatedRoute, private _router: Router, private _movieService: MovieService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.movie$ = this._route.params.switchMap(params =>
      this._movieService.getMovieById(params.id)
    );
  }

  morphBackground(colors: Colors) {
    this.movieCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }

  closeSelf(): void {
    this._router.navigate([{ outlets: {'sidebar': null } }]);
  }

}
