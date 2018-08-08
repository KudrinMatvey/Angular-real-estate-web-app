import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-bids',
  templateUrl: './user-bids.component.html',
  styleUrls: ['./user-bids.component.css']
})
export class UserBidsComponent implements OnInit {

  user={"id":""}
  constructor(private userService:UserService) {
    this.user.id = userService.getUser().id; 
   }

  ngOnInit() {
  }

}
