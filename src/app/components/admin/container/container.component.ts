import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  
  totalstock ?: any;
  data?: any[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(AppState.getTotalStock).subscribe(total => {
      this.totalstock = total;
      var data = {
        "Description": "Total Stock",
        "Value": this.totalstock,
      } 
      this.data?.push(data);

    })
  }

}
