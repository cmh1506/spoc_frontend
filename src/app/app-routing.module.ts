import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {MaterialverwendungListComponent} from "./materialverwendung-list/materialverwendung-list.component";
import {VerpackungListComponent} from "./verpackung-list/verpackung-list.component";
import {MaterialverwendungFormComponent} from "./materialverwendung-form/materialverwendung-form.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'materialverwendungen', component: MaterialverwendungListComponent },
  { path: 'verpackungen', component: VerpackungListComponent },
  { path: 'materialverwendungForm', component: MaterialverwendungFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
