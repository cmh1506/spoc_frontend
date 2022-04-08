import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VerpackungFormComponent} from './verpackung-form/verpackung-form.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MaterialComponent} from './material/material.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {HomeComponent} from './home/home.component';
import {MatSliderModule} from '@angular/material/slider';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {BenutzerFormComponent} from './benutzer-form/benutzer-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {RecyclingverfahrenListComponent} from './recyclingverfahren-list/recyclingverfahren-list.component';
import {BenutzerComponent} from "./benutzer/benutzer.component";
import {MaterialListComponent} from './material-list/material-list.component';
import {MaterialFormComponent} from './material-form/material-form.component';
import {VerpackungListComponent} from "./verpackung-list/verpackung-list.component";
import {TransportmittelListComponent} from './transportmittel-list/transportmittel-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VerpackungListComponent,
    VerpackungFormComponent,
    LoginComponent,
    MaterialComponent,
    HomeComponent,
    HeaderComponent,
    BenutzerComponent,
    BenutzerFormComponent,
    RecyclingverfahrenListComponent,
    MaterialListComponent,
    MaterialFormComponent,
    TransportmittelListComponent,
    RegistrationComponent,
    ChangePasswordComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule,
        MatSliderModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }

