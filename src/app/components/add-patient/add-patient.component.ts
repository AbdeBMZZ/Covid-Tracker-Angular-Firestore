import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Citoyen } from 'src/app/models/Citoyen';
import { Patient } from 'src/app/models/Patient';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  patients:Array<Patient>;
  person:Citoyen;
  addForm = new FormGroup({
    fullName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    Age : new FormControl('',[Validators.required,Validators.maxLength(3)]),
    symp : new FormControl('',[Validators.required,Validators.maxLength(3)]),
    Address : new FormControl('',[Validators.required,Validators.minLength(3)])

  });
  
  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {

  }

  onSubmit() {
    let name = this.addForm.getRawValue().fullName.trim();
    let age = this.addForm.getRawValue().Age.trim();
    let symp = this.addForm.getRawValue().symp.trim();
    let add = this.addForm.getRawValue().Address.trim();

    let sympt;
    if(symp==1)
      sympt=true;
    else
      sympt=false;

    this.person = new Citoyen(name,age,add,sympt);

    let pipe = new DatePipe('en-US');
    let now = Date.now();
      
    let myShortFormat = pipe.transform(now, 'yyyy/MM/dd HH:mm:ss');
    
    this.service.getCitoyens().doc().set({
      address: add,
      age: age,
      name: name,
      symp: sympt,
      time: myShortFormat
    }).then(() => {
      console.log("Document of citizen successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  
  if(this.service.test(this.person)=="POSITIVE"){

      this.service.getJustPatients().doc().set({
        address: add,
        age: age,
        name: name,
        firstdate: myShortFormat
      }).then(() => {
        console.log("Document of patient successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    };
  }
    
  }

