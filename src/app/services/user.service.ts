import { User } from './../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User = {};
    
  constructor(private http:HttpClient, private tokenService:TokenService) {

   }

  logIn(user)
  { 
    this.http.post('/server/users/login',{params:user})
      .subscribe(response=> this.tokenService.TOKEN = <string>response);
    if(this.tokenService.TOKEN != null){
      this.http.get('/server/user/currentuser')
        .subscribe(response=>this.user = <User>response);
      return true;
    }
    else return false;
  }

  regigter(user){
    let success = false;
    this.http.put('/server/users/register',{params:user})
      .subscribe(response=> success = <boolean>response);
    return success;
  }

  logOut(){
    let success = false;
    this.http.get('/server/users/logout')
      .subscribe(response=> success = <boolean>response);
    if(success)
      this.tokenService.TOKEN = "";
    return success;
  }

  getUser(){
    return this.user;
  }

  getFirstName(){
    if(this.user)
    return this.user.firstName;
  }

  getId(){
    if(this.user)
    return this.user.id;
  }
  
}
