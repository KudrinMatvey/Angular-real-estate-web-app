import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  getUserBids(id){
    return[{
    "id":"1",
    "user":"1",
    "bid":"1"
  },{
    "id":"1",
    "user":"1",
    "bid":"1"
  }]

  }
  getAdBids(id){
    return[{
      "id":"1",
      "user":"1",
      "bid":"1"
    },{
      "id":"1",
      "user":"1",
      "bid":"1"
    }]    
  }

  constructor() { }
}
