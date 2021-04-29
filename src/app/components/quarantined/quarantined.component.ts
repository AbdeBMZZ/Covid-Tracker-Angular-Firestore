import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-quarantined',
  templateUrl: './quarantined.component.html',
  styleUrls: ['./quarantined.component.scss']
})
export class QuarantinedComponent implements OnInit {
  public citoyensTo:Array<Patient>;

  constructor(public service:ServiceService) { 
    this.citoyensTo = this.service.getPatients()
  }

  ngOnInit(): void {

  }
}
