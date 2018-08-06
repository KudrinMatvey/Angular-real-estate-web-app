import { AdsService } from './ads.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
