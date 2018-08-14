import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _TOKEN:string;
  constructor() { }
   get TOKEN():string{
    return this.TOKEN;
  }
  set TOKEN(token:string){
    this._TOKEN = token;
  }
}
