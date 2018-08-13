import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new Object;
  logIn(user)
  {
    this.http.post('/server/users/login',{params:user}).subscribe(response=> this.user = response);
    return true;
    // Переделать чтоб возвращало что-то адекватное
  }
  regigter(user){
    this.http.post('/server/users/register',{params:user}).subscribe(response=> this.user = response);

    return true;
  }
  getUser(){
    if(this.user)
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
