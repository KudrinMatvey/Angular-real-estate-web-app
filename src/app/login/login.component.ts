import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user={"email":"","password":""};
  constructor(private userService:UserService,private router:Router) {
   }

send(user)
{
  if(this.userService.logIn(user))
  this.router.navigate(['']);
  else {
    this.user={"email":"","password":""};
    this.router.navigate(['registration']);
}}
}
