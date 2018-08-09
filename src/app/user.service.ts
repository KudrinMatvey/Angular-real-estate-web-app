import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logIn(user)
  {
    console.log(user.password);
    console.log(user.email);
    return true;
  }
  regigter(user){
    console.log(user);

    return true;
  }
  getUser(){
    return{"fn":"Vasya","id":"1"};
  }
  constructor() { }
}
