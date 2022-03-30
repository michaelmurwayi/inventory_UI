import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from 'src/app/state/app.state';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks?: Array<Product> = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(AppState.getStocks).subscribe(stocks =>{
      this.stocks = stocks;
    })
  }

}
