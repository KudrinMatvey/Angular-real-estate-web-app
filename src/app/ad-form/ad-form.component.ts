import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {
  // property;
  // type;
  // city;
  // area;
  // price;
  // floor;
  // desc;
  // img;
  constructor() { }

  send(ad){
    console.log(ad);
    console.log(ad.city);
   }
  ngOnInit() {
  }

}
