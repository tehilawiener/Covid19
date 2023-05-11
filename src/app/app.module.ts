import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { IgxDatePickerModule } from 'igniteui-angular';
import { HomeComponent } from './Components/home/home.component';
import { AddHMOmemberComponent } from './Components/add-hmomember/add-hmomember.component';
import { GetAllHMOmembersComponent } from './Components/get-all-hmomembers/get-all-hmomembers.component';
import { GetSingleHMOmemberComponent } from './Components/get-single-hmomember/get-single-hmomember.component';
import { covid19Module } from './covid19Module';
import { AddCoronaDetailsComponent } from './Components/add-corona-details/add-corona-details.component';
import { GetSingleCoronaDetailsComponent } from './Components/get-single-corona-details/get-single-corona-details.component';
import { GetAllCoronaDetailsComponent } from './Components/get-all-corona-details/get-all-corona-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddAvaccinationComponent } from './Components/add-avaccination/add-avaccination.component';

import { MapComponent } from './map/map.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddHMOmemberComponent,
    GetAllHMOmembersComponent,
    GetSingleHMOmemberComponent,
    AddCoronaDetailsComponent,
    GetSingleCoronaDetailsComponent,
    GetAllCoronaDetailsComponent,
    AddAvaccinationComponent,
    GraphComponent,
    MapComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    covid19Module,
    NgbModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
