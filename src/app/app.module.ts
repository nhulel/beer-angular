import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BeerDataService } from './beer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    BeerCartComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
