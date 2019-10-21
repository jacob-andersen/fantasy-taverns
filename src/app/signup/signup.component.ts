import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
    username='';
    password='';
    myTavern='';
    Taverns = ['Moe\'s Tavern','Joe\'s Tavern','Blasphemy Bar','Rejected Reality','Brianna\'s'];
    role = 'admin';
    User = {UserName: '', Password:'', Tavern:{Id:0, TavernName:''}}
    name='Angular';
  constructor(private router: Router)
  {}

  signup(username:string,password:string): void {
    this.User.UserName=username;
    this.User.Password=password;
    this.User.Tavern.TavernName=this.myTavern;
    console.log(username, password, this.myTavern)
    this.router.navigateByUrl('/signup');
}
onChange(deviceValue) {
  this.User.Tavern.TavernName=deviceValue;
  console.log(deviceValue);
}

}
