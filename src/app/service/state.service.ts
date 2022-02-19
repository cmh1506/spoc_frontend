import { Injectable } from '@angular/core';
import {Verpackung} from "../domain/verpackung";
import {HttpHeaders} from "@angular/common/http";
import {Material} from "../domain/material";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  verpackungs!: Verpackung[];
  headers!: HttpHeaders;
  materials!: Material[];

  constructor() { }
}
