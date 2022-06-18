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
  cart: any;
  sub_total?: number;
  total?: number;
  tax = 0.00;

  constructor(private CartService: CartService) { }

  getCart() {
    this.cart = this.CartService.getCart();
    return this.cart;
  }
  getTotalPrice() {
    let total = 0;
    this.cart.forEach((item: { price: number; quantity: number; }) => {
      total += item.price * item.quantity;
    }
    );
    return total;
  }

  ngOnInit(): void {
    this.myDate = new Date();
    this.cart = this.getCart();
    this.sub_total = this.getTotalPrice();
    this.total = this.sub_total + this.tax;


  }

}
