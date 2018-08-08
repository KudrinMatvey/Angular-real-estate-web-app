import { AdFormComponent } from './ad-form/ad-form.component';
import { BsNavbarService } from './bs-navbar.service';
import { AdsService } from './ads.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdsComponent } from './ads/ads.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { UserBidsComponent } from './user-bids/user-bids.component';
import { AdComponent } from './ad/ad.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAdsComponent } from './user-ads/user-ads.component';
import { DataTableModule } from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    BsNavbarComponent,
    HomeComponent,
    UserBidsComponent,
    AdComponent,
    UserPageComponent,
    UserAdsComponent,
    AdFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path:'' ,component :HomeComponent},
      {path:'user' ,component :UserPageComponent},
      {path:'ad' ,component :AdComponent},   
      {path:'ads' ,component :UserAdsComponent},   
      {path:'bids' ,component :UserBidsComponent}, 
      {path:'newAd', component:AdFormComponent},  
      {path:'editAd/:id', component:AdFormComponent},  
    ])
  ],
  providers: [AdsService,BsNavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
