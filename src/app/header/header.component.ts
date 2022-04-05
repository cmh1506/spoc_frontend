import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Materialverwendung} from "../domain/materialverwendung";
import {StateService} from "../service/state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: Boolean = false;

  constructor() { }


  ngOnInit(): void {
    this.admin = sessionStorage.getItem("userRole") === "ADMIN";
  }

}
