import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-critical-cases',
  templateUrl: './critical-cases.component.html',
  styleUrls: ['./critical-cases.component.scss']
})
export class CriticalCasesComponent implements OnInit {
  public patients:Array<Patient>;
  constructor(public service:ServiceService) { 
      this.patients= this.service.getCriticalCases();
  }
  ngOnInit(): void {
  }

}
