import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Citoyen } from '../models/Citoyen';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public citoyens:Array<Citoyen>;
  public patients:Array<Patient>;

  constructor(private frestore:AngularFirestore) { 
    this.getAll();
  }

  getAll(){
    return this.frestore.collection('Citoyen').snapshotChanges().subscribe((doc)=>{
      this.citoyens = doc.map((citoyen)=>{
        return {
          ...citoyen.payload.doc.data() as {}
        } as Citoyen;
      })
    });
    
  }
  getPatientFromCitoyens(){
    this.getAll()
    let patients:Array<Patient>;
    patients=new Array<Patient>();
    this.citoyens.forEach(element => {
      if(this.test(element)=="POSITIVE"){
        patients.push(element);
    }});
    return patients;
  }

  getCitoyens(){
    return this.frestore.collection('Citoyen');
  }

  getJustPatients(){
    return this.frestore.collection('patient');
  }

  test(params:Citoyen):any {
    if(params.age>=50 && params.symp == true)
      return "POSITIVE";
    else
      return "NEGATIVE";
  }

  calculateCurrentday(p:Patient){

    let dateP = new Date(p.time);
    let Tnow = new Date();

    const diffTime = Math.abs(Tnow.getTime() - new Date(dateP).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    return diffDays;
  }
}
