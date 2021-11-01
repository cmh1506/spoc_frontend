import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../service/material.service";
import {Material} from "../domain/material";
import {Materialverwendung} from "../domain/materialverwendung";

@Component({
  selector: 'app-materialverwendung-form',
  templateUrl: './materialverwendung-form.component.html',
  styleUrls: ['./materialverwendung-form.component.css']
})
export class MaterialverwendungFormComponent implements OnInit {

  constructor(public materialService: MaterialService) { }

  materials!: Material[];

  formData!: Materialverwendung;


  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data => {this.materials = data})
    this.formData = new Materialverwendung();
  }

}
