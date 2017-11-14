import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {DataStorageService} from '../series-list/data-storage.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(private http: Http, private dataStorageService: DataStorageService) {
  }

  //
  // getAllMovies(): Observable<any[]> {
  //   // const token = this.authService.getToken();
  //
  //   return this.http.get('http://localhost:8080/api/movies?')
  //     .map(response => response.json())
  //     .catch(error => Observable.throw(error.statusText));
  //
  // }

  storeMovies(): Observable<any[]> {
    return this.http.put('https://movieflixhani.firebaseio.com/movies.json', this.dataStorageService.getMovies())
      .map(
        (response) => response.json(),
        (error) => Observable.throw(error)
      );

  }
}
