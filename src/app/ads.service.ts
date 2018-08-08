import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }
  getAds()
  {
    return[{
      "id": "1",
      "area": "24",
      "city": "nn",
      "description": "hey",
      "floor": "3",
      "imageURL": "https://c1.staticflickr.com/6/5461/9857344334_3d3fd47b67.jpg",
      "price": "1",
      "property": "house",
      "rooms": "3"
    },
    {
      "id": "2",
      "area": "234",
      "city": "NY",
      "description": "hey",
      "floor": "4",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNhongy3IhocAMupKXEXDWrBd-fv95olaMMdl8G7j7drusQ-_",
      "price": "0",
      "property": "house",
      "rooms": "4"
    },
    {
      "id": "3",
      "area": "23444",
      "city": "NYwe",
      "description": "hey",
      "floor": "41",
      "imageURL": "https://i.ytimg.com/vi/UQBK4bSftBs/maxresdefault.jpg",
      "price": "10",
      "property": "house",
      "rooms": "4"
    },
    {
      "id": "4",
      "area": "53234",
      "city": "N324Y",
      "description": "hey",
      "floor": "34",
      "imageURL": "https://i.ytimg.com/vi/4TlmQbGkkgI/hqdefault.jpg",
      "price": "4330",
      "property": "house",
      "rooms": "344"
    },
    {
      "id": "5",
      "area": "235",
      "city": "NkY",
      "description": "dfhey",
      "floor": "44",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNhongy3IhocAMupKXEXDWrBd-fv95olaMMdl8G7j7drusQ-_",
      "price": "04",
      "property": "house",
      "rooms": "54"
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
