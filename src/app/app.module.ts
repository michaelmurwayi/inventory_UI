import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppState } from './state/app.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './components/home-view/home-main/home-main.component';
import { HomeNavComponent } from './components/home-view/home-nav/home-nav.component';
import { StockListComponent } from './components/stock-view/stock-list/stock-list.component';
import { CartComponent } from './components/stock-view/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './components/stock/stock.component';
import { ProductComponent } from './components/stock-view/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { ContainerComponent } from './components/admin/container/container.component';
import { BargraphComponent } from './components/admin/bargraph/bargraph.component';
import { LinegraphComponent } from './components/admin/linegraph/linegraph.component';
import { MapComponent } from './components/admin/map/map.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMainComponent,
    HomeNavComponent,
    StockListComponent,
    CartComponent,
    DashboardComponent,
    StockComponent,
    ProductComponent,
    SidenavComponent,
    ContainerComponent,
    BargraphComponent,
    LinegraphComponent,
    MapComponent,
    AdmindashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }