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
  omdbMovie;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService) { }
  movieModel = new Movie("", "", "", "","");
  

  ngOnInit(){
    this.defaultLoad();
  }
  onSubmit(omdbMovie:OmdbMovie) {
    this.movieModel.title=omdbMovie.Title;
    this.movieModel.year=omdbMovie.Year;
    this.movieModel.imdbId=omdbMovie.imdbID;
    this.movieModel.type=omdbMovie.Type;
    this.movieModel.poster=omdbMovie.Poster;
    this.movieService.saveMovie(this.movieModel).subscribe(res => console.log('Saved'));

  }

  onClick() {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => { this.movies = data });
    this.omdbMovie=null;
  }

  onSearch() {
    this.movieService.getMovieOmdb(this.omdbSearchTitle).subscribe(data => {
      this.omdbMovie = data['Search'];
      console.log("Movie data is ",data)
    });
    this.movies=null;

  }

  onDelete(movie){
    this.movieService.deleteMovie(movie.id).subscribe(res => console.log('Deleted'))
    window.location.reload(true);
  }

  defaultLoad(){
    this.movieService.defaultLoad().subscribe(data => {
      this.omdbMovie = data['Search'];
  });
}
}
  
