import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoronaDetail } from 'src/app/Classes/corona-detail';
import { CoronaDetailService } from 'src/app/Services/corona-detail.service';

@Component({
  selector: 'app-get-all-corona-details',
  templateUrl: './get-all-corona-details.component.html',
  styleUrls: ['./get-all-corona-details.component.css']
})
export class GetAllCoronaDetailsComponent {

// newItem:ShopingBag=new ShopingBag();

   
 constructor(private activeRoute:ActivatedRoute,private CovidServ:CoronaDetailService, public router: Router){}
   singleCDetails: CoronaDetail=new CoronaDetail();

//   currentProduct:Product=new Product(11,"try","nn",4,50,"ii");

Covid19Details=new Array;
  ngOnInit(){
    debugger
   
   this.CovidServ.getAllCovid19Details().subscribe(
      myData=>{
         this.Covid19Details=myData;
        } ,
         err=>{
          alert(err.message)
         }
     )
   }
  
}
