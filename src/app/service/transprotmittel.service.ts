import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Transportmittel} from "../domain/transportmittel";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class TransprotmittelService {

  constructor(private http: HttpClient, private stateService: StateService) { }
  public getTransportmittels(): Observable<Transportmittel[]>{
    const headers = this.stateService.headers;
    return this.http.get<Transportmittel[]>(`${environment.apiURL}transportmittel/allTransportmittels`, {headers});
  }
}
