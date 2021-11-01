import { Component, OnInit } from '@angular/core';
import {MaterialverwendungService} from "../service/materialverwendung.service";
import {Materialverwendung} from "../domain/materialverwendung";

@Component({
  selector: 'app-materialverwendung-list',
  templateUrl: './materialverwendung-list.component.html',
  styleUrls: ['./materialverwendung-list.component.css']
})
export class MaterialverwendungListComponent implements OnInit {

  constructor(private service: MaterialverwendungService) { }

  materialverwendungs!: Materialverwendung[];

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {this.materialverwendungs = data;})
  }

}
