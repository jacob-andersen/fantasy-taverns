import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
    userName = '';
    password = '';
    myRole = '';

  constructor(private router: Router)
  {}

  signup(): void {
    console.log(this.userName, this.password)
    this.router.navigateByUrl('/signup');
}

}
