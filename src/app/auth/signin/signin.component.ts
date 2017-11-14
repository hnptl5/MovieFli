import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
  }


  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.onSigninUser(email, password);
    this.route.navigate(['movies']);

  }

  onClick() {
    this.route.navigate(['/signup']);
  }
}
