import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import {Materialverwendung} from "./domain/materialverwendung";
import {MaterialverwendungListComponent} from "./materialverwendung-list/materialverwendung-list.component";
import {VerpackungListComponent} from "./verpackung-list/verpackung-list.component";
import { VerpackungFormComponent } from './verpackung-form/verpackung-form.component';
import { MaterialverwendungFormComponent } from './materialverwendung-form/materialverwendung-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    MaterialverwendungListComponent,
    VerpackungListComponent,
    VerpackungFormComponent,
    MaterialverwendungFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
