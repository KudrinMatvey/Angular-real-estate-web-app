
import { AdsService } from './../ads.service';
import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad';

@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  tittle = "list of ads";
  ads$;
  adArray:Ad[];
  searchText = "hey";
  constructor(adsService:AdsService) { 
    this.ads$ =adsService.getAds();
    this.adArray = this.ads$;
    console.log(this.adArray);
  }
  onSave($event)
  {

    console.log("hey",$event);
  }
onKeyUp()
{
  console.log(this.searchText);
}
  ngOnInit() {
  }

}
