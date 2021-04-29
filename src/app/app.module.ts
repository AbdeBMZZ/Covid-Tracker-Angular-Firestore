import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { ShowCasesComponent } from './components/show-cases/show-cases.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { QuarantinedComponent } from './components/quarantined/quarantined.component';
import { HospitaledComponent } from './components/hospitaled/hospitaled.component';
import { CriticalCasesComponent } from './components/critical-cases/critical-cases.component';
import { HeaderCasesComponent } from './components/header-cases/header-cases.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPatientComponent,
    ListPatientsComponent,
    ShowCasesComponent,
    AboutMeComponent,
    QuarantinedComponent,
    HospitaledComponent,
    CriticalCasesComponent,
    HeaderCasesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
