import { BidService } from './../bid.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
@Input('searchId') id;
@Input('for') for ;
data:any[];
public filterQuery = "";
public rowsOnPage = 5;
public sortBy = "id";
public sortOrder = "asc";
  constructor(private bidService:BidService) {
    if(this.for == "user") 
    this.data = bidService.getUserBids(this.id);
    else
    this.data = bidService.getAdBids(this.id);
    console.log(this.data);
   }

  ngOnInit() {
  }

}
