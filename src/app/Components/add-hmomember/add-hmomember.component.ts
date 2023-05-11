import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CoronaDetail } from 'src/app/Classes/corona-detail';
import { HMOmember } from 'src/app/Classes/hmomember';
import { CoronaDetailService } from 'src/app/Services/corona-detail.service';
import { HMOmemberService } from 'src/app/Services/hmomember.service';
//6666
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hmomember',
  templateUrl: './add-hmomember.component.html',
  styleUrls: ['./add-hmomember.component.css']
})
export class AddHMOmemberComponent {
  pictureForm: FormGroup | undefined;
  hmoM:HMOmember=new HMOmember();
  HMOmembers=new Array;
  newCvd:CoronaDetail=new CoronaDetail(this.hmoM.id);
  CvdDetails=new Array;
  dateParserFormatter: any;
  selectedDate: NgbDateStruct | null | undefined;
constructor(public hmoServ:HMOmemberService,public router:Router,public cvdServ:CoronaDetailService,private formBuilder: FormBuilder){
  this.pictureForm = this.formBuilder.group({
    picture: ['']
  });
}
// onSubmit(): void {
//   const formData = new FormData();
//   formData.append('picture', this.pictureForm!.get('picture')!.value);

//   // Pass formData to the HTTP request for picture upload
//   // ...
// }


addHMO(){
  this.hmoServ.addNewHMOmember(this.hmoM).subscribe(
    myData=>{
      //dont know why...
      this.HMOmembers=myData
      this.router.navigate(['/viewHMOmembers']); 
    },
    err=>{
      alert(err.message);
    }
    
  )
}


//   this.cvdServ.addNewCvd19(this.newCvd).subscribe(

//     myData2=>{
//       //dont know why...
//       alert(this.newCvd.hmoMemberId)
//       this.CvdDetails=myData2
//       this.router.navigate(['/viewAllCoronaDetails']); 
//     },
//     err=>{
//       alert(err.message);
//     }
//   )
// }

onDateSelect(date: NgbDate) {
  alert("date:"+date.year+"month"+date.month+"day"+date.day);

  const selectedDate = new Date(date.year, date.month - 1, date.day);

  this.newCvd.dateOfVaccines1 =  this.dateParserFormatter.format(this.selectedDate);
}



}
