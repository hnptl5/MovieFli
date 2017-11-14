import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {DataStorageService} from './data-storage.service';


@Injectable()
export class SeriesService {

  constructor(private http: Http, private dataStorageService: DataStorageService) {
  }

  StoreSeries(): Observable<any[]> {
    return this.http.put('https://movieflixhani.firebaseio.com/series.json', this.dataStorageService.getSeries())
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
}
