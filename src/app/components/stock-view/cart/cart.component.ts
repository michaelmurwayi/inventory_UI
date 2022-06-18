import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myDate?: any;
  time?: any;
  cart : any;

  constructor(private CartService: CartService) { }

  getCart() {
    this.cart = this.CartService.getCart();
    return this.cart;
  }

  ngOnInit(): void {
    this.myDate = new Date();
    this.cart = this.getCart();
    console.log("cart is ", this.cart)

  }

}
