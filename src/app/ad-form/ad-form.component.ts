import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsService } from '../ads.service';

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
  ad={"id":"-1"};
  err;
  constructor(
    private adService:AdsService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) 
    this.ad = adService.getAd(id);
  }

  send(ad){
    if(ad.property && ad.city && ad.area && ad.description && ad.price && ad.rooms && ad.floor) {
      this.adService.saveAd(ad);
      this.router.navigate(['/'])
   }
   else alert("Please enter all info");
}
   delete(){
    if(this.ad.id != "-1")  
    if(confirm("Are you sure?"))
      {
      this.adService.deleteAd(this.ad.id);
      this.router.navigate(['/']);
    } }
  ngOnInit() {
  }

}
