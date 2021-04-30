import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/models/Citoyen';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
  public citoyens:Array<Citoyen>;

  constructor(public service:ServiceService) {
    this.citoyens = new Array<Citoyen>();

  }

  ngOnInit(): void {

    this.service.getCitoyens().snapshotChanges().subscribe((doc)=>{

      this.citoyens = doc.map((citoyen)=>{
        return {
          ...citoyen.payload.doc.data() as {}
        } as Citoyen;
      })
    })
  }
  changestyle(c:Citoyen){
    if(this.service.test(c)=="POSITIVE")
      return "indianred";
    return "mediumseagreen";
  }

}
