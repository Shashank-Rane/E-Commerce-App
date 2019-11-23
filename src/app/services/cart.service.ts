import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data;
  constructor() { }
  

  setData(cartData){
    this.data = cartData;
  }

  getData(){
    let cartData = this.data;
    this.clearData();
    return cartData;
  }

  clearData(){
    this.data = undefined;
  }
}
