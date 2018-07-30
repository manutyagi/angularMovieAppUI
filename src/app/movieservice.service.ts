import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private _url:string = "http://localhost:8080/api/v1/getAllMovies"
  private _url1:string = "http://localhost:8080/api/v1/saveMovie"
  constructor(private http:HttpClient) { }
  saveMovie(movie:Movie):Observable<Movie>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this._url1,movie);
  }

  getAllMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this._url);
  }

}
