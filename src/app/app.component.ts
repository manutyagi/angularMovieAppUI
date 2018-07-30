import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieserviceService } from './movieservice.service';
import { Observable } from 'rxjs';
import { OmdbMovie } from './omdbmovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies;
  omdbmovies;
  omdbMovie;
  movieTitle = '';
  constructor(private movieService: MovieserviceService) { }
  movieModel = new Movie("", "", "", "",);

  onSubmit(omdbMovie:OmdbMovie) {
    this.movieModel.title=omdbMovie.Title;
    this.movieModel.year=omdbMovie.Year;
    this.movieModel.imdbId=omdbMovie.Rated;
    this.movieModel.type=omdbMovie.Genre;
    this.movieService.saveMovie(this.movieModel).subscribe(res => console.log('Saved'));
  }

  onClick() {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => { this.movies = data });

  }

  onSearch() {
    this.movieService.getMovieOmdb(this.movieTitle).subscribe(data => {
      this.omdbMovie = data['Search'];
      console.log("Movie data is ",data)
    });

  }

  onDelete(movie){
    this.movieService.deleteMovie(movie.id).subscribe(res => console.log('Deleted'))
    window.location.reload(true);
  }

}
