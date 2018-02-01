import { Component, HostBinding, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePosterComponent implements OnInit {
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() showMovieDetails: EventEmitter<any> = new EventEmitter();
  @Input() movie: any;
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  clickMoviePoster(event: Event, movie, doNotPropagate?: boolean): void {
    if (doNotPropagate) {
      event.stopPropagation();
    }
    this.selectMovie.emit(movie);
  }
  clickMovieDetails(movie): void {
    this.showMovieDetails.emit(movie);
  }

}
