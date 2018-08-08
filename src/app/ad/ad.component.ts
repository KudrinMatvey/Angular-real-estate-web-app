import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../models/ad';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
@Input('ad') ad:Ad;
  constructor(private modalService: NgbModal ) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
