import { AdService } from '../services/ads.service';
import { Component, Input } from '@angular/core';
import { Ad } from '../models/ad';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent  {
@Input('ad') ad = {};
@Input('adId') adId:number;
  constructor(private modalService: NgbModal,private adService:AdService ) { 
    if(this.adId) 
    adService.getAd(this.adId).subscribe(ad => this.ad = ad);
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
