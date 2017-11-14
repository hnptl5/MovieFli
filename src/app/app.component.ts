import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDG-5G5_uLl6Ry7_4L_OsAKeABRr1r4vlI',
      authDomain: 'movieflixhani.firebaseapp.com'
    });
  }

}
