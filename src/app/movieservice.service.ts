import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private _url: string = "http://localhost:8080/api/v1/getAllMovies"
  private _url1: string = "http://localhost:8080/api/v1/saveMovie"
  private omdbUrl: string = "http://www.omdbapi.com/?s="
  private apiKey: string = "&apikey=6db283eb"
  private _url2:string = "http://localhost:8080/api/v1/deleteMovie/"
  constructor(private http: HttpClient) { }

  saveMovie(movie: Movie): Observable<Movie> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this._url1, movie);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._url);
  }

  getMovieOmdb(title: string) {
    let url =`${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }

  deleteMovie(id){
    return this.http.delete(this._url2+id);
    }
  }

