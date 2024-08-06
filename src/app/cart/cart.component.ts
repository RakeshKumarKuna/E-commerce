import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../Services/apidata.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,SlicePipe,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  public cartItems:any[] = [];
  public count:number=1;
  public totalCount:number=0;
constructor(private http:HttpClient,private api:ApidataService){}
  ngOnInit(): void {
    this.api.getcartItems().subscribe((data)=>{
      this.cartItems=data
     
    });
  }

}
