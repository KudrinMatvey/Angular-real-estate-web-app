import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _TOKEN="";
  constructor() { }
  get TOKEN():string{
    return this._TOKEN;
  }
  set TOKEN(token:string){
    this._TOKEN = token;
  }
}
