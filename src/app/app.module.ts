import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppState } from './state/app.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-view/home-main/home.component';
import { HomeNavComponent } from './components/home-view/home-nav/home-nav.component';
// import { HomeFooterComponent } from './components/home-view/home-view/home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent
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