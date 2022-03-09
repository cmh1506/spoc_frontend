import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Verpackung} from "../domain/verpackung";
import {VerpackungService} from "../service/verpackung.service";
import {Materialverwendung} from "../domain/materialverwendung";
import {MaterialverwendungService} from "../service/materialverwendung.service";
import {Material} from "../domain/material";
import {Verarbeitung} from "../domain/verarbeitung";
import {Recyclingverfahren} from "../domain/recyclingverfahren";
import {MaterialService} from "../service/material.service";
import {VerarbeitungService} from "../service/verarbeitung.service";
import {RecyclingverfahrenService} from "../service/recyclingverfahren.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {StateService} from "../service/state.service";
import {EnergierueckgewinnungService} from "../service/energierueckgewinnung.service";
import {Energierueckgewinnung} from "../domain/energierueckgewinnung";
import {Transportmittel} from "../domain/transportmittel";
import {TransprotmittelService} from "../service/transprotmittel.service";

@Component({
  selector: 'app-verpackung-form',
  templateUrl: './verpackung-form.component.html',
  styleUrls: ['./verpackung-form.component.css']
})
export class VerpackungFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private verpackungService: VerpackungService,
              private materialverwendungService: MaterialverwendungService,
              public materialService: MaterialService,
              public verarbeitungService: VerarbeitungService,
              public energierueckgewinnungService: EnergierueckgewinnungService,
              public recyclingverfahrenService: RecyclingverfahrenService,
              public transprotmittelService: TransprotmittelService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private router: Router,
              private currentRoute: ActivatedRoute,
              public stateService: StateService) {
  }

  materialverwendungs: Materialverwendung[] = [];
  verarbeitungs!: Verarbeitung[];
  energierueckgewinnungs!: Energierueckgewinnung[];
  transportmittels!: Transportmittel[];
  recyclingverfahrens!: Recyclingverfahren[];
  verpackung!: Verpackung | undefined;
  verpackungForm: any;
  materialverwendungsForm = this.fb.group({
    materialId: [''],
    verarbeitungId: [''],
    recyclingverfahrenId: [''],
    energierueckgewinnungId: [''],
    transportmittelId: [''],
    recyclingQuote: [''],
    menge: [''],
    flaeche: [''],
    dicke: [''],
    transportstrecke: ['']
  })

  materialCO2Aufwand: number =0;
  cradleToGate: number =0;
  cradleToGrave: number =0;
  cradleToGraveCO2Gutschrift: number =0;
  cradleToGraveCO2GutschriftBioFuel: number =0;
  materialAufwandEnergie: number =0;
  cradleToGateEnergie: number =0;
  cradleToGraveEnergie: number =0;
  cradleToGraveGutschriftEnergie: number =0;
  cradleToGraveGutschriftBioFuelEnergie: number =0;


  ngOnInit(): void {
    let verpackungId = Number(this.currentRoute.snapshot.paramMap.get('id'));
    this.verpackung = this.stateService.verpackungs.find(v => v.id == verpackungId);
    if(this.verpackung){
      document.getElementById("mVerwList")?.removeAttribute('hidden');
    }
    this.verpackungForm = this.fb.group({
      name: [this.verpackung?.name],
      beschreibung: [this.verpackung?.beschreibung]
    })
    this.loadMaterialverwendungen(verpackungId);
    this.materialService.getMaterials().subscribe(data => {
      this.stateService.materials = data
    });
    this.verarbeitungService.getVerarbeitungs().subscribe(data => {
      this.verarbeitungs = data
    });
    this.energierueckgewinnungService.getEnergierueckgewinnungs().subscribe(data => this.energierueckgewinnungs = data);
    this.recyclingverfahrenService.getRecyclingverfahrens().subscribe(data => this.recyclingverfahrens = data);
    this.transprotmittelService.getTransportmittels().subscribe(data => this.transportmittels = data);

  }

  private loadMaterialverwendungen(verpackungId: number) {
    if (verpackungId != null && verpackungId != 0) {
      this.materialverwendungService.findAllForVerpackungsId(verpackungId).subscribe(data => {
        this.materialverwendungs = data;
        let materialCO2Aufwand: number =0;
        let cradleToGate: number =0;
        let cradleToGrave: number =0;
        let cradleToGraveCO2Gutschrift: number =0;
        let cradleToGraveCO2GutschriftBioFuel: number =0;
        let materialAufwandEnergie: number =0;
        let cradleToGateEnergie: number =0;
        let cradleToGraveEnergie: number =0;
        let cradleToGraveGutschriftEnergie: number =0;
        let cradleToGraveGutschriftBioFuelEnergie: number =0;
        this.materialverwendungs.forEach(m => {
          materialCO2Aufwand = materialCO2Aufwand +  m.materialCO2Eq;
          cradleToGate = cradleToGate + m.materialCO2Eq + m.transportCo2Eq + m.co2AufwandVerarbeitung;
          cradleToGrave = cradleToGrave + m.materialCO2Eq + m.transportCo2Eq + m.co2AufwandVerarbeitung + m.verbrennungCo2Eq;
          cradleToGraveCO2Gutschrift = cradleToGraveCO2Gutschrift + m.materialCO2Eq + m.transportCo2Eq + m.co2AufwandVerarbeitung + m.verbrennungCo2Eq - m.gutschriftVerbrennungCo2Eq;
          cradleToGraveCO2GutschriftBioFuel = cradleToGraveCO2GutschriftBioFuel + m.materialCO2Eq + m.transportCo2Eq + m.co2AufwandVerarbeitung + m.verbrennungCo2Eq - m.gutschriftVerbrennungCo2Eq + m.indirectco2Biofuel;
          materialAufwandEnergie = materialAufwandEnergie + m.materialEnergie;
          cradleToGateEnergie = cradleToGateEnergie + m.materialEnergie + m.transportEnergie + m.energieAufwandVerarbeitung;
          cradleToGraveEnergie = cradleToGraveEnergie + m.materialEnergie + m.transportEnergie + m.energieAufwandVerarbeitung;
          cradleToGraveGutschriftEnergie = cradleToGraveGutschriftEnergie + m.materialEnergie + m.transportEnergie + m.energieAufwandVerarbeitung - m.verbrennungENutzEnergie;
          //cradleToGraveGutschriftBioFuelEnergie = cradleToGraveGutschriftBioFuelEnergie + m.materialEnergie + m.transportEnergie + m.energieAufwandVerarbeitung + m.verbrennungENutzEnergie - m.verbrennungENutzEnergie;
        });
        this.materialCO2Aufwand = materialCO2Aufwand;
        this.cradleToGate = cradleToGate;
        this.cradleToGrave = cradleToGrave;
        this.cradleToGraveCO2Gutschrift = cradleToGraveCO2Gutschrift;
        this.cradleToGraveCO2GutschriftBioFuel = cradleToGraveCO2GutschriftBioFuel;
        this.materialAufwandEnergie = materialAufwandEnergie;
        this.cradleToGateEnergie = cradleToGateEnergie;
        this.cradleToGraveEnergie = cradleToGraveEnergie;
        this.cradleToGraveGutschriftEnergie = cradleToGraveGutschriftEnergie;
        this.cradleToGraveGutschriftBioFuelEnergie = cradleToGraveGutschriftBioFuelEnergie;
      })
    }
  }

  @ViewChild('callMatVerwDialog') callMatVerwDialog!: TemplateRef<any>;


  addOrEditMaterialverwendung() {
    this.materialverwendungsForm.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    this.dialog.open(this.callMatVerwDialog, dialogConfig);
  }

  saveMaterialverwendung() {
    let vid: number = 0;
    if (this.verpackung?.id != 0) {
      // @ts-ignore
      vid = this.verpackung.id;
    }
    var body = {
      materialId: this.materialverwendungsForm.controls['materialId'].value,
      menge: this.materialverwendungsForm.controls['menge'].value,
      flaeche: this.materialverwendungsForm.controls['flaeche'].value,
      dicke: this.materialverwendungsForm.controls['dicke'].value,
      verarbeitungId: this.materialverwendungsForm.controls['verarbeitungId'].value,
      recyclingQuote: this.materialverwendungsForm.controls['recyclingQuote'].value,
      recyclingverfahrenId: this.materialverwendungsForm.controls['recyclingverfahrenId'].value,
      energierueckgewinnungId: this.materialverwendungsForm.controls['energierueckgewinnungId'].value,
      transportstrecke: this.materialverwendungsForm.controls['transportstrecke'].value,
      transportmittelId: this.materialverwendungsForm.controls['transportmittelId'].value,
      verpackungId: vid
    }
    this.materialverwendungService.addMaterialVerwendung(body).subscribe(res => {
      this.materialverwendungs.push(res)

      this.materialCO2Aufwand = this.materialCO2Aufwand + res.materialCO2Eq;
      this.cradleToGate = this.cradleToGate + res.materialCO2Eq + res.transportCo2Eq + res.co2AufwandVerarbeitung;
      this.cradleToGrave = this.cradleToGrave + res.materialCO2Eq + res.transportCo2Eq + res.co2AufwandVerarbeitung + res.verbrennungCo2Eq;
      this.cradleToGraveCO2Gutschrift = this.cradleToGraveCO2Gutschrift + res.materialCO2Eq + res.transportCo2Eq + res.co2AufwandVerarbeitung + res.verbrennungCo2Eq - res.gutschriftVerbrennungCo2Eq;
      this.cradleToGraveCO2GutschriftBioFuel = this.cradleToGraveCO2GutschriftBioFuel + res.materialCO2Eq + res.transportCo2Eq + res.co2AufwandVerarbeitung + res.verbrennungCo2Eq - res.gutschriftVerbrennungCo2Eq + res.indirectco2Biofuel;
      this.materialAufwandEnergie = this.materialAufwandEnergie + res.materialEnergie;
      this.cradleToGateEnergie = this.cradleToGateEnergie + res.materialEnergie + res.transportEnergie + res.energieAufwandVerarbeitung;
      this.cradleToGraveEnergie = this.cradleToGraveEnergie + res.materialEnergie + res.transportEnergie + res.energieAufwandVerarbeitung
      this.cradleToGraveGutschriftEnergie = this.cradleToGraveGutschriftEnergie + res.materialEnergie + res.transportEnergie + res.energieAufwandVerarbeitung - res.verbrennungENutzEnergie;
      //this.cradleToGraveGutschriftBioFuelEnergie = this.cradleToGraveGutschriftBioFuelEnergie + res.materialEnergie + res.transportEnergie + res.energieAufwandVerarbeitung - res.verbrennungENutzEnergie;
    });
    this.dialog.closeAll();
  }

  deleteMaterialverwendung(id: number) {
    this.materialverwendungService.deleteMaterialverwendung(id).subscribe(() => {
      // @ts-ignore
      this.loadMaterialverwendungen(this.verpackung.id);

    });
  }

  onSubmit() {
    var body = {
      id: this.verpackung?.id,
      name: this.verpackungForm.controls['name'].value,
      beschreibung: this.verpackungForm.controls['beschreibung'].value,
      userId: sessionStorage.getItem('userId')
    }
    this.verpackungService.addVerpackung(body).subscribe(res => {
      this.verpackung = res;
      // @ts-ignore
      document.getElementById("mVerwList").removeAttribute('hidden');
    })

  }

  disableFlaecheDicke() {
    if (this.materialverwendungsForm.controls['menge'].value != "") {
      this.materialverwendungsForm.controls['flaeche'].disable();
      this.materialverwendungsForm.controls['dicke'].disable();
    } else {
      this.materialverwendungsForm.controls['flaeche'].enable();
      this.materialverwendungsForm.controls['dicke'].enable();
    }
  }

  disableMenge() {
    if (this.materialverwendungsForm.controls['flaeche'].value != "" || this.materialverwendungsForm.controls['dicke'].value != "") {
      this.materialverwendungsForm.controls['menge'].disable();
    } else {
      this.materialverwendungsForm.controls['menge'].enable();
    }
  }

}
