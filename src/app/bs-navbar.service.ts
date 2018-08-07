import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BsNavbarService {
  getUserFirstName(){
    return "Vasya";
    //return null;
  }

  constructor() { }
}
