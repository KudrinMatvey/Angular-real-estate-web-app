import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }
  getAds()
  {
    return[{
      "id":"1",
      "area":"234", "city":"nn", "description":"hey", "floor":"4","imageURL":"https://c1.staticflickr.com/6/5461/9857344334_3d3fd47b67.jpg",
      "price":"0","property":"house","rooms":"4"
      },
      {
        "id":"2",
        "area":"234", "city":"NY", "description":"hey", "floor":"4","imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNhongy3IhocAMupKXEXDWrBd-fv95olaMMdl8G7j7drusQ-_",
        "price":"0","property":"house","rooms":"4"
        }
      ]
  }
  getAd(id)
  {
    return{
      "id":"1",
      "area":"234", "city":"nn", "description":"hey", "floor":"4","imageURL":"https://c1.staticflickr.com/6/5461/9857344334_3d3fd47b67.jpg",
      "price":"0","property":"house","rooms":"4"
    }
  }
  deleteAd(id)
  {
    console.log("deleted " + id);
  }
  saveAd(ad)
  {
    console.log("save" + ad);
  }
}
