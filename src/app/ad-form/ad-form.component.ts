import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../services/ads.service';

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
   ad = {"id":"-1","property":"null"};
  err;
  constructor(
    private adService:AdService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) 
    {
      var tmp;
    adService.getAd(id).subscribe(response => tmp = response);
    this.ad = tmp;
  }
}

  send(ad){
    if(ad.property && ad.city && ad.area &&  ad.price && ad.rooms && ad.floor) {
      this.adService.saveAd(ad).subscribe();
      this.router.navigate(['/'])
   }
   else alert("Please enter all info");
}
   delete(){
    if(this.ad.id != "-1")  
    if(confirm("Are you sure?"))
      {
      this.adService.deleteAd(this.ad.id).subscribe();
      this.router.navigate(['/']);
    } }
  ngOnInit() {
  }

}
