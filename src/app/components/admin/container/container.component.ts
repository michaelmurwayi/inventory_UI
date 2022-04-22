import { Component, OnInit } from '@angular/core';
import { createAction } from '@ngrx/store';
import { Store } from '@ngxs/store';
import { GetTotalStocks } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  
  totalstock ?: number;
  data?: any[] = [];
  totalshells?: number;
  totalempties?: number;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(createAction(GetTotalStocks.type));
    this.store.select(AppState.getTotalStock).subscribe(total => {
      this.totalstock = total;
      var data = {
        "Description": "Total Stock",
        "Value": this.totalstock,
      }
      this.data?.push(data);

    });

    this.store.select(AppState.getShells).subscribe(shells => {
      this.totalshells = shells;
      var data = {
        "Description": "Shells",
        "Value": this.totalshells,
      }
      this.data?.push(data);
    });

    this.store.select(AppState.getEmpties).subscribe(empties => {
      this.totalempties = empties;
      var data = {
        "Description": "Empties",
        "Value": this.totalempties,
      }
      this.data?.push(data);
    });


  }

}
