import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hospitaled',
  templateUrl: './hospitaled.component.html',
  styleUrls: ['./hospitaled.component.scss']
})
export class HospitaledComponent implements OnInit {
  public patients:Array<Patient>;
  constructor(public service:ServiceService) { 
      this.patients= this.service.getPatientg75();
  }

  ngOnInit(): void {
  }

}
