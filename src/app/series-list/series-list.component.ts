import {Component, OnInit} from '@angular/core';
import {SeriesService} from './series.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesList: any = [];
  errorMessage: string;

  constructor(private seriesService: SeriesService, private router: Router) {
  }

  ngOnInit() {
    this.seriesService.StoreSeries()
      .subscribe(
        series => this.seriesList = series,
        error => this.errorMessage = <any>error
      );
  }

  onSelect() {
    this.router.navigate(['/series-detail']);
  }
}
