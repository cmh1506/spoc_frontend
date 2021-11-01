import { Component, OnInit } from '@angular/core';
import {VerpackungService} from "../service/verpackung.service";
import {Verpackung} from "../domain/verpackung";

@Component({
  selector: 'app-verpackung-list',
  templateUrl: './verpackung-list.component.html',
  styleUrls: ['./verpackung-list.component.css']
})
export class VerpackungListComponent implements OnInit {

  constructor(private verpackungService: VerpackungService) { }

  verpackungs!: Verpackung[];

  ngOnInit(): void {
    this.verpackungService.findAll().subscribe(data => {
      this.verpackungs = data
    })
  }

}
