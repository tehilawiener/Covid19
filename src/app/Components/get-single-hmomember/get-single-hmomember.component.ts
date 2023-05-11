import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HMOmember } from 'src/app/Classes/hmomember';
import { CoronaDetailService } from 'src/app/Services/corona-detail.service';
import { HMOmemberService } from 'src/app/Services/hmomember.service';

@Component({
  selector: 'app-get-single-hmomember',
  templateUrl: './get-single-hmomember.component.html',
  styleUrls: ['./get-single-hmomember.component.css']
})
export class GetSingleHMOmemberComponent {
  constructor(private activeRoute:ActivatedRoute,private HMOServ:HMOmemberService, public router: Router){}
  

 ngOnInit(){
 }
 
//  this.activeRoute.params.subscribe(
//     myParams=>{
//       //?????
//       let ID=myParams["Id"];
//      this.CovidServ.getCovid19DetailsById(ID).subscribe(
//        myData=>{
//            this.singleCDetails=myData;
// //         this.currentProduct=this.singleProduct;
//       } ,
//        err=>{
//                   alert(err.message)
//        }
//     );
//        }
//  )
hmo:HMOmember=new HMOmember();
singleHMOmember: HMOmember=new HMOmember();
Search(){
 // debugger
  this.HMOServ.getSingleHMOmember(this.hmo.id!).subscribe(
    myData=>{
      this.singleHMOmember=myData;
    },
    err=>{
      alert(err.message);
    }
  );
  
 }
}
