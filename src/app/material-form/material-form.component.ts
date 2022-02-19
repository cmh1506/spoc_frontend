import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MaterialService} from "../service/material.service";
import {Router} from "@angular/router";
import {StateService} from "../service/state.service";

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent {
  materialForm = this.fb.group({
    a_name: [null, Validators.required],
    fossiles: [null, Validators.required],
    prozessenergie: [null, Validators.required],
    productionCO2: null,
    bioco2prod: [null, Validators.required],
    bioFuelCO2: [null, Validators.required],
    dichte: [null, Validators.required],
    co2Verbrennung: [null, Validators.required],
    bioCO2Verbrennung: [null, Validators.required],
    heizenergie: [null, Validators.required],
    co2Recycling: [null, Validators.required],
    energieRecycling: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,
              private materialService: MaterialService,
              private router: Router,
              private stateService: StateService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  onSubmit(): void {
    var body = {
      a_name: this.materialForm.controls['a_name'].value,
      fossiles: this.materialForm.controls['fossiles'].value,
      prozessenergie: this.materialForm.controls['prozessenergie'].value,
      productionCO2: this.materialForm.controls['productionCO2'].value,
      bioco2prod: this.materialForm.controls['bioco2prod'].value,
      bioFuelCO2: this.materialForm.controls['bioFuelCO2'].value,
      dichte: this.materialForm.controls['dichte'].value,
      co2Verbrennung: this.materialForm.controls['co2Verbrennung'].value,
      bioCO2Verbrennung: this.materialForm.controls['bioCO2Verbrennung'].value,
      heizenergie: this.materialForm.controls['heizenergie'].value,
      co2Recycling: this.materialForm.controls['co2Recycling'].value,
      energieRecycling: this.materialForm.controls['energieRecycling'].value,
    }


    this.materialService.addMaterial(body).subscribe(() =>
      this.router.navigate(['/materials'])
    );

  }
}
