import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { FleetListComponent } from './fleet-list/fleet-list.component';
import { CargoComponent } from './cargo/cargo.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent,
    FleetListComponent,
    CargoComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
