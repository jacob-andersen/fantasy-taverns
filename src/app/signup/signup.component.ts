import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
    userName = '';
    password = '';

  constructor(private router: Router)
  {}

}
