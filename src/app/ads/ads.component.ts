import { AdsService } from './../ads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  tittle = "list of ads";
  ads;
  constructor(adsService:AdsService) { 
    this.ads = adsService.getAds();
  }
  onSave($event)
  {
    console.log("hey",$event);
  }

  ngOnInit() {
  }

}
