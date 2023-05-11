import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HMOmember } from '../Classes/hmomember';

@Injectable({
  providedIn: 'root'
})
export class HMOmemberService {

  URL = "https://localhost:7103/api/HMOmember";
 
  constructor(private myHttp:HttpClient) { }
  getAllHMOmembers():Observable<Array<HMOmember>>
  {
     return this.myHttp.get<Array<HMOmember>>(this.URL+"/GetAllHMOmembers")
  }
  getSingleHMOmember(ID:string):Observable<HMOmember>
  {
     return this.myHttp.get<HMOmember>(this.URL+"/GetHMOmemberByID/"+ID)
   }

   addNewHMOmember(newHMOm:HMOmember):Observable<Array<HMOmember>>
   {
     return this.myHttp.post<Array<HMOmember>>(this.URL+"/AddHMOmember",newHMOm);
    }
}
