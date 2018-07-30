import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieserviceService} from './movieservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private movieService:MovieserviceService){}
  movieModel = new Movie("","","","");
    
  onSubmit(){
    this.movieService.saveMovie(this.movieModel).subscribe(res => console.log('Done'));
  }
  
  onClick(){
    this.movieService.getAllMovies().subscribe((data:Movie[])=>{this.movies=data});
    
  }

}
