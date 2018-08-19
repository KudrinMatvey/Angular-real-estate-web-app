export class Ad{
    id:number;
    property:string;
    city:string;
    address:string;
    area:number;
    rooms:number;
    floor:number;
    description:string;
    price:number;
    imageURL:string[];
    constructor(id?:number, property?:string, city?:string,address?:string,
        area?:number,rooms?:number,floor?:number,description?:string,price?:number,imageURL?:string[]){
            this.property = property;
            this.city =city;
            this.address =address;
            this.area =area;
            this.rooms =rooms;
            this.floor =floor;
            this.description =description;
            this.price =price;
            this.imageURL = imageURL;
        }
}