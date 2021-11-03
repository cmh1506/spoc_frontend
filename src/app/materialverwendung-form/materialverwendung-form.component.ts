import {Component, OnInit} from '@angular/core';
import {MaterialService} from "../service/material.service";
import {Material} from "../domain/material";
import {Materialverwendung} from "../domain/materialverwendung";
import {VerarbeitungService} from "../service/verarbeitung.service";
import {Verarbeitung} from "../domain/verarbeitung";
import {Recyclingverfahren} from "../domain/recyclingverfahren";
import {RecyclingverfahrenService} from "../service/recyclingverfahren.service";

@Component({
  selector: 'app-materialverwendung-form',
  templateUrl: './materialverwendung-form.component.html',
  styleUrls: ['./materialverwendung-form.component.css']
})
export class MaterialverwendungFormComponent implements OnInit {

  constructor(public materialService: MaterialService,
              public verarbeitungService: VerarbeitungService,
              public recyclingverfahrenService: RecyclingverfahrenService) {
  }

  materials!: Material[];
  verarbeitungs!: Verarbeitung[];
  recyclingverfahrens!: Recyclingverfahren[];
  formData!: Materialverwendung;


  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data => {
      this.materials = data
    });
    this.verarbeitungService.getVerarbeitungs().subscribe(data => {
      this.verarbeitungs = data
    });
    this.recyclingverfahrenService.getRecyclingverfahrens().subscribe(data => this.recyclingverfahrens = data);
    this.formData = {
      id: 0,

      materialId: 0,
      verarbeitungId: 0,
      recyclingverfahrenId: 0,
      material: "",
      verarbeitung: "",
      recyclingverfahren: ""
    };
  }

}
