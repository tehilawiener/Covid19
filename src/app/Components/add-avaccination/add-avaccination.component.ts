import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoronaDetail } from 'src/app/Classes/corona-detail';
import { CoronaDetailService } from 'src/app/Services/corona-detail.service';
import { NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-avaccination',
  templateUrl: './add-avaccination.component.html',
  styleUrls: ['./add-avaccination.component.css']
})

// 
// import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
// import { Component } from '@angular/core';

// ...

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   selectedDate: NgbDateStruct | null;
  
//   constructor(private dateParser: NgbDateParserFormatter) { }
  
//   get formattedDate(): string {
//     if (this.selectedDate == null) {
//       return '';
//     }
//     return this.dateParser.format(this.selectedDate);
//   }
// }


// 
export class AddAvaccinationComponent {
  dateParserFormatter: any;
  data = {
     HmoMemberId :315177402,
     DateOfVaccines1:'df',
     Vmanufacturer1:'df',
     DateOfVaccines2:'fd',
     Vmanufacturer2:'fd',
     DateOfVaccines3:'df',
     Vmanufacturer3:'df',
     DateOfVaccines4:'frg',
     Vmanufacturer4:'reg',
     TimeOfPositiveAnswer:'rg',
     RecoveryDate:'gre',
  };
  //constructor(private activeRoute:ActivatedRoute,private cvdServ:CoronaDetailService, public router: Router,private dateParser: NgbDateParserFormatter){}
  constructor(private http: HttpClient,private dateParser: NgbDateParserFormatter) {}
  // cvd:Array<CoronaDetail>=new Array();
  newCovidD:CoronaDetail=new CoronaDetail();
  newCovidD2:CoronaDetail=new CoronaDetail();
  selectedDate: NgbDateStruct | null | undefined;
  // Covid19Details=new Array;
  //?????????????????
    ngOnInit(){
    // //  debugger
    //   this.cvdServ.getAllCovid19Details().subscribe(
    //     myData=>{
    //        this.Covid19Details=myData;
    //       // this.currentProduct=this.singleProduct;
    //       } ,
    //        err=>{
    //         alert(err.message)
    //        }
    //    )

      }
   
      get formattedDate(): string {
            if (this.selectedDate == null) {
              return '';
            }
            return this.dateParser.format(this.selectedDate);
          }

            
onDateSelect(date: NgbDate) {
  alert("date:"+date.year+"month"+date.month+"day"+date.day);
  // convert NgbDate to JavaScript Date object
  const selectedDate = new Date(date.year, date.month - 1, date.day);
  
  // assign the selected date to your object property

  this.newCovidD.dateOfVaccines1 =  this.dateParserFormatter.format(this.selectedDate);
}
  add(){
    const url = `https://localhost:7103/api/CoronaDetails/AddVaccination​/${this.data.HmoMemberId}`
    this.http.put(url, this.data)
      .subscribe(
        response =>alert('Data sent successfully'),
        error => alert(error.message)
        );
  }
    // this.cvdServ.addaVaccination(this.newCovidD.hmoMemberId!,this.newCovidD).subscribe(
    //      myData=>{
    //       alert(this.newCovidD2.hmoMemberId)
    //        this.newCovidD=myData
    //        this.router.navigate(['/viewAllCoronaDetails']); 
    //      },
    //      err=>{
    //        alert(err.message);
    //      }
    // )
     


    // 
  //   this.activeRoute.params.subscribe(
  //     myParams=>{
  //     let code=myParams["code"];
  //     this.applicationServ.getDetailsByCode(code).subscribe(
  //       myData=>{
  //         this.myP=myData;
          
  //       },
  //       err=>{
  //         alert(err.message);
  //       }
  //     )
       
  //      },
  //  err=>{
  //   alert(err.message);
  // } 
  //   ) 
    // 
//debugger;
//this.newCovidD2=this.Covid19Details.find(x=>x.hmoMemberId==this.newCovidD.hmoMemberId)
   //if(this.Covid19Details.find(x=>x.hmoMemberId==this.newCovidD.hmoMemberId)!='undefined')
   //{
    //this.newCovidD.code=this.newCovidD2.code;


   
   }
   
  //    this.cvdServ.addaVaccination(this.newCovidD.hmoMemberId!,this.newCovidD);

      // else{
      //   alert("no id ")
      // }
    
  
//}
  


  // }
  

