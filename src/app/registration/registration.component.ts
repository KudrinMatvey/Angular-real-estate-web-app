import { UserService } from '../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  user={"email":"",
  "firstName":"" ,
  "lastName":"",
  "phone":"",
  "password":""};
  constructor(private userService:UserService,private router:Router) {
   }

  send(user)
  {
    if(this.userService.regigter(user))
    this.router.navigate(['']);
  }

}
