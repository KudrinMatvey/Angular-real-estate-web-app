import { BsNavbarService } from '../services/bs-navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  user:string;
  constructor(service:BsNavbarService) {
    this.user = service.getUserFirstName();
   }

  ngOnInit() {
  }

}
