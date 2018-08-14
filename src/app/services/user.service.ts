import { User } from './../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  smth:any;
  logIn(user)
  {
    this.http.post('/server/users/login',{params:user}).subscribe(response=> this.user = <User>response);
    return true;
    // Переделать чтоб возвращало что-то адекватное
  }
  regigter(user){
    this.http.post('/server/users/register',{params:user}).subscribe(response=> this.user = <User>response);
    return true;
  }
  logOut(){
    this.http.get('/server/users/logout').subscribe(response=> this.user = <User>response);
    return true;
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
  constructor(private http:HttpClient) { }
}
