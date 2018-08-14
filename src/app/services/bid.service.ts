import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  getUserBids(id){
    const httpParams = new HttpParams ().set("id",this.userService.getId());
    return this.http.get('/server/bids/user', {params:httpParams} );//TODO
  }
  getAdBids(id){
    return this.http.get('/server/bids/ad', id);
  }

  constructor(private http:HttpClient,private userService:UserService) { }
}
