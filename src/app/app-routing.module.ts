import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VerpackungFormComponent} from "./verpackung-form/verpackung-form.component";
import {LoginComponent} from "./login/login.component";
import {MaterialComponent} from "./material/material.component";
import {BenutzerFormComponent} from "./benutzer-form/benutzer-form.component";
import {RecyclingverfahrenListComponent} from "./recyclingverfahren-list/recyclingverfahren-list.component";
import {MaterialListComponent} from "./material-list/material-list.component";
import {BenutzerComponent} from "./benutzer/benutzer.component";
import {MaterialFormComponent} from "./material-form/material-form.component";
import {VerpackungListComponent} from "./verpackung-list/verpackung-list.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

const routes: Routes = [
  {path: 'login', children: [
      {path: '', component: LoginComponent},
      {path: ':notfound', component: LoginComponent}
    ]},
  /*{ path: 'login', component: LoginComponent },*/
  { path: 'users', component: BenutzerComponent },
  { path: 'verpackungen', component: VerpackungListComponent },
  { path: 'verpackungForm', children: [
      {path:'', component:VerpackungFormComponent},
      {path: 'edit/:id', component: VerpackungFormComponent}
    ]},
  { path: 'material', component: MaterialComponent },
  { path: 'benutzerForm', component: BenutzerFormComponent },
  { path: 'recyclingverfahrens', component: RecyclingverfahrenListComponent },
  { path: 'materials', component: MaterialListComponent },
  { path: 'materialform', component: MaterialFormComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'changePW', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
