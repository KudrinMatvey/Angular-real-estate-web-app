import { Observable, of, throwError} from "rxjs"
import { User } from './../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { error } from '@angular/compiler/src/util';
import { map,catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new User();
    
  constructor(private http:HttpClient, private tokenService:TokenService) {

   }

   
  logIn(user)
  { 

    this.http.post('/server/users/login',{"username":user.username,"password":user.password})
     .pipe(
      map( response => response.toString()))
      .subscribe(response => {
        if(response != ""){
          console.log(response);
          this.tokenService.TOKEN = response;
            this.http.get('/server/user/currentuser')
                     .subscribe(response=>this.user = <User>response);
            return true;
          }
          else return false;
      })
        
  }

  regigter(user){
    let success = false;
    this.http.put('/server/users/register',{params:user})
      .subscribe(response=> {
        return( <boolean>response)});

  }

  logOut(){
    this.tokenService.TOKEN = "";
    this.user = new User();
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
