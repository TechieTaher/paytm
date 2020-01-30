import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranscationComponent } from './transcation/transcation.component';
import { ItemsComponent } from './items/items.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { MobileRechargeComponent } from './transcation/mobile-recharge/mobile-recharge.component';
import { ElecticityComponent } from './transcation/electicity/electicity.component';
import { BroadbandComponent } from './transcation/broadband/broadband.component';


@NgModule({
  declarations: [
    AppComponent,
    TranscationComponent,
    ItemsComponent,
    AdvertiseComponent,
    MobileRechargeComponent,
    ElecticityComponent,
    BroadbandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
