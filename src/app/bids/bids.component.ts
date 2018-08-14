import { BidService } from '../services/bid.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent  {
@Input('searchId') id;
@Input('for') for ;
data;
public filterQuery = "";
public rowsOnPage = 5;
public sortBy = "id";
public sortOrder = "asc";
  constructor(private bidService:BidService) {
    if(this.for == "user") 
    bidService.getUserBids(this.id).subscribe(response => this.data = response );
    else
    bidService.getAdBids(this.id).subscribe(response =>this.data = response );
    console.log(this.data);
   }


}
