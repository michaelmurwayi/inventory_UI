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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }