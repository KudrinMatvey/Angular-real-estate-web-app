import { BidService } from './../services/bid.service';
import { Ad } from './../models/ad';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  @Input("ad") ad:Ad;
  disabled: boolean = false
  constructor(private bidService:BidService) { }
  send(value){
    this.bidService.sendAdBid(value.price,12);
  }
}
