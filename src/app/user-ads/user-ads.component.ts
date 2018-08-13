
import { AdService } from '../services/ads.service';
import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad';

@Component({
  selector: 'user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.css']
})
export class UserAdsComponent implements OnInit {
  tittle = "list of ads";
  ads$;
  data:any[];
  itemCount:number;
  items:Ad[]= [];//not needed
  searchText = "hey";
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "type";
  public sortOrder = "asc";

  // tableResource:DataTableResource<Ad>;
  constructor(adsService:AdService) { 
    this.ads$ = adsService.getUserAds();
    this.initializeTable(this.ads$);
  }

  private initializeTable(ads:Ad[]){
    // this.tableResource = new DataTableResource(ads);
    // this.tableResource.query({offset:0}).then(items=>this.items = items);
    // this.tableResource.count().then(count=>this.itemCount=count)
      this.data = ads;

  }
  reloadItems(params){
    // if(!this.tableResource) return;
    // this.tableResource.query(params).then(items=>this.items = items);
    // 
  }
  onSave($event){
    console.log("hey",$event);
  }
onKeyUp(){
  console.log(this.searchText);
}
  ngOnInit() {
   
  }

}
