import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoronaDetail } from 'src/app/Classes/corona-detail';
import { CoronaDetailService } from 'src/app/Services/corona-detail.service';

@Component({
  selector: 'app-get-single-corona-details',
  templateUrl: './get-single-corona-details.component.html',
  styleUrls: ['./get-single-corona-details.component.css']
})
export class GetSingleCoronaDetailsComponent {
  constructor(private activeRoute:ActivatedRoute,private CovidServ:CoronaDetailService, public router: Router){}

 ngOnInit(){
     
  // this.CovidServ.getAllCovid19Details().subscribe(
  //   myData=>{
  //      this.Covid19Details=myData;
  //     } ,
  //      err=>{
  //       alert(err.message)
  //      }
  //  )
 }

 


 singleCDetails: CoronaDetail=new CoronaDetail();
 Covid19Details=new Array;
cvd:CoronaDetail=new CoronaDetail();
Search(){
  debugger
  alert(this.cvd.hmoMemberId)
  this.CovidServ.getCovid19DetailsById(this.cvd.hmoMemberId!).subscribe(
    myData=>{
      this.singleCDetails=myData;
    },
    err=>{
      alert(err.message);
    }
  );
  
 }

}
//  hmo:HMOmember=new HMOmember();
// singleHMOmember: HMOmember=new HMOmember();
// Search(){
//  // debugger
//   this.HMOServ.getSingleHMOmember(this.hmo.id!).subscribe(
//     myData=>{
//       this.singleHMOmember=myData;
//     },
//     err=>{
//       alert(err.message);
//     }
//   );
  
//  }



