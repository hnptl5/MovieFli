import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from './app.routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {SeriesListComponent} from './series-list/series-list.component';
import {SeriesService} from './series-list/series.service';
import {MovieService} from './movie-list/movie.service';
import { HeaderComponent } from './header/header.component';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {DataStorageService} from "./series-list/data-storage.service";
import { SeriesDetailComponent } from './series-list/series-detail/series-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MovieListComponent,
    SeriesListComponent,
    HeaderComponent,
    MovieDetailComponent,
    HomeComponent,
    SeriesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SeriesService, MovieService, AuthService, AuthGuard, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
