import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MaterialService} from "../service/material.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StateService} from "../service/state.service";

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  materialForm = this.fb.group({
    a_name: [null, Validators.required],
    fossiles: [null, Validators.required],
    prozessenergie: [null, Validators.required],
    productionCO2: [null, Validators.required],
    bioco2prod: [null, Validators.required],
    bioFuelCO2: [null, Validators.required],
    dichte: [null, Validators.required],
    co2Verbrennung: [null, Validators.required],
    bioCO2Verbrennung: [null, Validators.required],
    heizenergie: [null, Validators.required],
    co2Recycling: [null, Validators.required],
    energieRecycling: [null, Validators.required],
    r_rate_herstellung: [null, Validators.required],
    co2_deponie: [null, Validators.required],
    recyclat_2te_mal: [null, Validators.required],
    recyclierbar: [null, Validators.required]
  });

  hasUnitNumber = false;
  materialId: number | undefined;

  constructor(private fb: FormBuilder,
              private materialService: MaterialService,
              private router: Router,
              private stateService: StateService,
              private changeDetectorRef: ChangeDetectorRef,
              private currentRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.materialId = Number(this.currentRoute.snapshot.paramMap.get('id'));
      if(this.materialId) {
          this.materialService.findMaterialById(this.materialId).subscribe((res: { [x: string]: any; }) => {
            this.materialForm = this.fb.group({
              a_name: [res["a_name"]],
              fossiles: [res["fossiles"]],
              prozessenergie: [res["prozessenergie"]],
              productionCO2: [res["productionCO2"]],
              bioco2prod: [res["bioco2prod"]],
              bioFuelCO2: [res["bioFuelCO2"]],
              dichte: [res["dichte"]],
              co2Verbrennung: [res["co2Verbrennung"]],
              bioCO2Verbrennung: [res["bioCO2Verbrennung"]],
              heizenergie: [res["heizenergie"]],
              co2Recycling: [res["co2Recycling"]],
              energieRecycling: [res["energieRecycling"]],
              r_rate_herstellung: [res["r_rate_herstellung"]],
              co2_deponie: [res["co2_deponie"]],
              recyclat_2te_mal: [res["recyclat_2te_mal"]],
              recyclierbar: [res["recyclierbar"]]
            })
          });
      }
    }

  onSubmit(): void {
    var body = {
      id: this.materialId,
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
      r_rate_herstellung: this.materialForm.controls['r_rate_herstellung'].value,
      co2_deponie: this.materialForm.controls['co2_deponie'].value,
      recyclat_2te_mal: this.materialForm.controls['recyclat_2te_mal'].value,
      recyclierbar: this.materialForm.controls['recyclierbar'].value
    }


    this.materialService.addMaterial(body).subscribe(() =>
      this.router.navigate(['/materials'])
    );

  }
}
