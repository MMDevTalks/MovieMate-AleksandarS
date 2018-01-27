import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies$: Observable<Array<any>>;
  selectedMovie: any;
  movieDetails: any;

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movies$ = this._movieService.getMovies();
  }

  selectMovie(movie): void {
    this.selectedMovie = movie;
  }
  showMovieDetails(movie): void {
    this.movieDetails = movie;
  }
}
