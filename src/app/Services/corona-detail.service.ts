import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoronaDetail } from '../Classes/corona-detail';
import { HomeComponent } from '../Components/home/home.component';
import { HMOmember } from '../Classes/hmomember';

@Injectable({
  providedIn: 'root'
})
export class CoronaDetailService {

  URL = "https://localhost:7103/api/CoronaDetails";
  constructor(private myHttp:HttpClient) { }
  getAllCovid19Details():Observable<Array<CoronaDetail>>
  {
     return this.myHttp.get<Array<CoronaDetail>>(this.URL+"/GetAllCoronaDetails")
  }

  //   getSingleHMOmember(ID:string):Observable<HMOmember>
  // {
  //   return this.myHttp.get<HMOmember>(this.URL+"/GetHMOmemberByID/"+ID)
  // }
  getCovid19DetailsById(ID:string):Observable<CoronaDetail>
  {
    alert(ID+"im in service")
    // /api/CoronaDetails/GetCoronaDetailsByID/{ID}
     return this.myHttp.get<CoronaDetail>(this.URL+"/GetCoronaDetailsByID/"+ID)
   }
   addaVaccination(ID:string, newC:CoronaDetail):Observable<CoronaDetail>{
       debugger;
   //  alert(ID);
   
   // ​/api​/CoronaDetails​/AddVaccination​/{ID}
  //  `https://localhost:7103/api/CoronaDetails/AddVaccination​/${ID}`
       return this.myHttp.put( this.URL+"/AddVaccination​/"+ID,newC);
   }

   addNewCvd19(newCvd:CoronaDetail):Observable<Array<CoronaDetail>>
   {
     return this.myHttp.post<Array<CoronaDetail>>(this.URL+"/AddCoronaDetails",newCvd);
    }
}

