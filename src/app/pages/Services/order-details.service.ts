import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  foodDetails = [
    {
      id:1,
      foodName:"Jollof Rice",
      foodDetail:"Steamed Jollof Rice",
      foodPrice:1500,
      foodImg:"../../../assets/images/Jollof.jpg"
    },
    {
      id:2,
      foodName:"Fried Rice",
      foodDetail:"Steamed Fried Rice",
      foodPrice:1900,
      foodImg:"../../../assets/images/Fried.jpg"
    },
    {
      id:3,
      foodName:"Basmati Rice",
      foodDetail:"Steamed Basmati Rice",
      foodPrice:1500,
      foodImg:"../../../assets/images/basmati.jpg"
    },
    {
      id:4,
      foodName:"White Rice and Beans",
      foodDetail:"White Rice and Beans",
      foodPrice:1200,
      foodImg:"../../../assets/images/ricenbeans.jpg"
    },
    {
      id:5,
      foodName:"Chineese Rice",
      foodDetail:"Chineese Rice with Sea food",
      foodPrice:10500,
      foodImg:"../../../assets/images/chineese.jpg"
    },
    {
      id:6,
      foodName:"Pasta",
      foodDetail:"Pasta with griled Turkey",
      foodPrice:2500,
      foodImg:"../../../assets/images/pasta.jpg"
    },
    {
      id:7,
      foodName:"White Rice",
      foodDetail:"White Rice with stew",
      foodPrice:1700,
      foodImg:"../../../assets/images/whiterice.jpg"
    }
  ]
  constructor() { }
}
