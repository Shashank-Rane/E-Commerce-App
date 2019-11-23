import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsData:[]= this.cartService.getData()
  constructor(private cartService:CartService,private authService:AuthService,private router: Router,private http: HttpClient) { 
      }
  
  ngOnInit() {
  }
  
  onDeleteitem(pdata){
    this.productsData.map(data=>{
      if(data['name'] == pdata.name){
        pdata.quantity=parseInt(pdata.quantity)
        if(pdata.quantity >1){
          return pdata.quantity=pdata.quantity-1;
        }else if(pdata.quantity == 1){
          this.productsData.splice(this.productsData.indexOf(data), 1);
        }
      };
    })
  }

  onSubmit(){
    return this.http.post<any>('http://localhost:3000/cart',this.productsData).subscribe()
  }

  getCartData(){
    return this.http.get('http://localhost:3000/cartData').subscribe(data=>{
      console.log("Cart Data",data)
    })
  }
}
