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
  sendAdBid(price,id){
    let httpParams = new HttpParams().set("id",id).set("price",price);
    this.http.post('/server/bids/ad/addOrder',httpParams).subscribe();
  }
  constructor(private http:HttpClient,private userService:UserService) { }
}
