import { Component, OnInit } from '@angular/core';
import {VerpackungService} from "../service/verpackung.service";
import {Verpackung} from "../domain/verpackung";
import {Router} from "@angular/router";
import {User} from "../domain/user";
import {StateService} from "../service/state.service";

@Component({
  selector: 'app-verpackung-list',
  templateUrl: './verpackung-list.component.html',
  styleUrls: ['./verpackung-list.component.css']
})
export class VerpackungListComponent implements OnInit {

  constructor(private verpackungService: VerpackungService,
    public stateService: StateService,
    private router: Router) { }



  ngOnInit(): void {
    this.verpackungService.findAllForUserId(sessionStorage.getItem("userId")).subscribe(data => {
    //this.verpackungService.findAll().subscribe(data => {
      this.stateService.verpackungs = data;
    });

  }

  showVerpackungDetail(id: number) {
    this.router.navigate(['/verpackungForm/edit/' + id]);
  }
}
