import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Router} from '@angular/router';
import {AuthService} from "../auth/auth.service";

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: any[];

  constructor(private movieService: MovieService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.movieService.storeMovies()
      .subscribe(
        response => this.movieList = response,
        error => console.log(error)
      );
  }

  onSelect() {
    this.router.navigate(['/movie-detail']);
  }

  onLogout() {
    this.authService.Signout();
  }

}
