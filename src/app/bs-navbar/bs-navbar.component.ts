import { BsNavbarService } from '../services/bs-navbar.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user:string;
  constructor(service:BsNavbarService,private userService:UserService) {
    // this.user = "vasya"; 
    this.user = service.getUserFirstName();
   }

  logOut(){
    this.userService.logOut(); 
  }

}
