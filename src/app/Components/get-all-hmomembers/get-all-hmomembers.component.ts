import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoronaDetail } from 'src/app/Classes/corona-detail';
import { HMOmemberService } from 'src/app/Services/hmomember.service';

@Component({
  selector: 'app-get-all-hmomembers',
  templateUrl: './get-all-hmomembers.component.html',
  styleUrls: ['./get-all-hmomembers.component.css']
})
export class GetAllHMOmembersComponent {
  constructor(private activeRoute:ActivatedRoute,private HMOServ:HMOmemberService, public router: Router){}
  singleCDetails: CoronaDetail=new CoronaDetail();

HMOmembers=new Array;
 ngOnInit(){
  
  this.HMOServ.getAllHMOmembers().subscribe(
     myData=>{
        this.HMOmembers=myData;
       } ,
        err=>{
         alert(err.message)
        }
    )
  }
 }
