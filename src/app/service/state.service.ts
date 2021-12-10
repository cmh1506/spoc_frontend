import { Injectable } from '@angular/core';
import {Verpackung} from "../domain/verpackung";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  verpackungs!: Verpackung[];
  headers!: HttpHeaders;

  constructor() { }
}
