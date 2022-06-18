import { Injectable } from '@angular/core';
import { Cart_Products } from '../models/Cart_Products';
import { Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart?: Array<Cart_Products> = [];
  constructor(private store: Store) { }

  getCart(){
    this.store.select(AppState.getCart).subscribe(cart =>{
      this.cart = cart;
      console.log("we are here ", this.cart)
    })
    return this.cart;
  }


}
