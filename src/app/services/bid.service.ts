import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  getUserBids(id){
    return this.http.get('/server/bids/user', this.userService.getId());//TODO
  }
  getAdBids(id){
    return this.http.get('/server/bids/ad', id);
  }

  constructor(private http:HttpClient,private userService:UserService) { }
}
