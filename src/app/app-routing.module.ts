import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {VerpackungListComponent} from "./verpackung-list/verpackung-list.component";
import {VerpackungFormComponent} from "./verpackung-form/verpackung-form.component";
import {LoginComponent} from "./login/login.component";
import {MaterialComponent} from "./material/material.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'verpackungen', component: VerpackungListComponent },
  { path: 'verpackungForm', children: [
      {path:'', component:VerpackungFormComponent},
      {path: 'edit/:id', component: VerpackungFormComponent}
    ]},
  { path: 'material', component: MaterialComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
