import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../models/ad';

@Component({
  selector: 'ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent  {
@Input('ad') ad:Ad;
@Input('show-actions') showActions = true; 
  constructor() { }

}
