import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MovieService } from '@movies/services';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<Array<any>>;
  selectedMovie: any;
  movieDetails: any;

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movies$ = this._movieService.getNowPlayingMovies();
  }

  selectMovie(movie): void {
    this.selectedMovie = movie;
  }
  showMovieDetails(movie): void {
    this.movieDetails = movie;
  }

}
