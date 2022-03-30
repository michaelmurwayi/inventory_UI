import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/app/models/Product';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks?: Array<Product> = [];
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(AppState.getStocks).subscribe(stocks =>{
      this.stocks = stocks;
    })
  }

}
