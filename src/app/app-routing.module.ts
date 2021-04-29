import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { CriticalCasesComponent } from './components/critical-cases/critical-cases.component';
import { HomeComponent } from './components/home/home.component';
import { HospitaledComponent } from './components/hospitaled/hospitaled.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { QuarantinedComponent } from './components/quarantined/quarantined.component';
import { ShowCasesComponent } from './components/show-cases/show-cases.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"add",component:AddPatientComponent},
  {path:"list",component:ListPatientsComponent},
  {path:"show",component:ShowCasesComponent},
  {path:"about",component:AboutMeComponent},
  {path:"show/quarantined",component:QuarantinedComponent},
  {path:"show/hospital",component:HospitaledComponent},
  {path:"show/hospitalCritical",component:CriticalCasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
