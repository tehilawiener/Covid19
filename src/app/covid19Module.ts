import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { AddHMOmemberComponent } from "./Components/add-hmomember/add-hmomember.component";
import { GetAllHMOmembersComponent } from "./Components/get-all-hmomembers/get-all-hmomembers.component";
import { GetSingleHMOmemberComponent } from "./Components/get-single-hmomember/get-single-hmomember.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCoronaDetailsComponent } from "./Components/add-corona-details/add-corona-details.component";
import { GetSingleCoronaDetailsComponent } from "./Components/get-single-corona-details/get-single-corona-details.component";
import { GetAllCoronaDetailsComponent } from "./Components/get-all-corona-details/get-all-corona-details.component";
import { AddAvaccinationComponent } from "./Components/add-avaccination/add-avaccination.component";
import { MapComponent } from "./map/map.component";

const myRoutes: Routes = [

    { path: "", component: HomeComponent,
    children:[
      
        {path:"viewHMOmembers", component:GetAllHMOmembersComponent},
        {path:"viewSingleMember",component:GetSingleHMOmemberComponent},
        {path:"addHMOmember", component:AddHMOmemberComponent},
        {path:"viewAllCoronaDetails", component:GetAllCoronaDetailsComponent},
        {path:"viewSingleCoronaDetails", component:GetSingleCoronaDetailsComponent},
        {path:"addCoronaDetails",component:AddCoronaDetailsComponent},
        {path:"googleMap",component:MapComponent},
        {path:":addAvaccination",component:AddAvaccinationComponent},
        // {path:"addAvaccination/:hmomemberId",component:AddAvaccinationComponent},
        
    ]}  
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(myRoutes), CommonModule
    ]
})
export class covid19Module{}