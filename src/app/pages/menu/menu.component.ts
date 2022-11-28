import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../Services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service : OrderDetailsService) { }

  Details:any;
  ngOnInit(): void {
     this.Details = this.service.foodDetails ;
    
  }

}
