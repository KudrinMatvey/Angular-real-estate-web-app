
import { AdsService } from './../ads.service';
import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad';
// import { DataTableResource } from 'angular-6-datatable'
@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  tittle = "list of ads";
  ads$;
  data:any[];
  itemCount:number;
  items:Ad[]= [];//not needed
  searchText = "hey";
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "type";
  public sortOrder = "asc";

  // tableResource:DataTableResource<Ad>;
  constructor(adsService:AdsService) { 
    this.ads$ = adsService.getAds();
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
