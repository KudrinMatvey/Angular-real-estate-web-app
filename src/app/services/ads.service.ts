import { Ad } from '../models/ad';
import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http:HttpClient,private userService:UserService) {
   }

  getAds() 
  {
    return this.http.get('/server/ads');
  }
  getUserAds()
  {
    return this.http.get('/server/ads/user', this.userService.getId())//TODO
  }
  
  getAd(id)
  {
    return this.http.get('/server/ads',id);
  }
  deleteAd(id)
  {
    return this.http.delete('/server/ads/delete',id);
  }
  saveAd(ad)
  {
    return this.http.post('/server/ads/save',{params:ad});
  }
  findAndReturnAds(ad){
    return this.http.get('/server/ads/find',{params:ad});
  }
}
