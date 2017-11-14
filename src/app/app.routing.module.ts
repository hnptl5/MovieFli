import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {NgModule} from '@angular/core';
import {SigninComponent} from './auth/signin/signin.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {SeriesListComponent} from './series-list/series-list.component';
import {HomeComponent} from './home/home.component';
import {MovieDetailComponent} from './movie-list/movie-detail/movie-detail.component';
import {AuthGuard} from './auth/auth-guard.service';
import {SeriesDetailComponent} from './series-list/series-detail/series-detail.component';


const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MovieListComponent, canActivate: [AuthGuard]},
  {path: 'movie-detail', component: MovieDetailComponent},
  {path: 'series-detail', component: SeriesDetailComponent},
  {path: 'tv-series', component: SeriesListComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

