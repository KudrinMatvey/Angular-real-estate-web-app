
import { AdsService } from './../ads.service';
import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad';
// import { DataTableResource } from 'angular-6-datatable'
@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  ads$;
  ad={};
 constructor(private adService:AdsService ) {
  this.getAll();
 }
 getAll(){
  this.ads$ = this.adService.getAds();
 }
 send(){
   this.adService.sendQuery(this.ad);
 }
 reset() {
   this.ad={};
   this.getAll();
 }
 find(){
   this.ads$ = this.adService.findAndReturnAds(this.ad);
   
 }

}
