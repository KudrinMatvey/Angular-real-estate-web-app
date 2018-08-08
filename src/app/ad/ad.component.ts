import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../models/ad';

@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
@Input('ad') ad:Ad;
  constructor() { }

  ngOnInit() {
  }

}
