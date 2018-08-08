import { AdsService } from './../ads.service';
import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../models/ad';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
@Input('ad') ad = {};
@Input('adId') adId:number;
  constructor(private modalService: NgbModal,private adsService:AdsService ) { 
    if(this.adId) 
    this.ad = adsService.getAd(this.adId);
  }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
