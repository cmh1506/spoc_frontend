import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Energierueckgewinnung} from "../domain/energierueckgewinnung";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class EnergierueckgewinnungService {

  constructor(private http: HttpClient, private stateService: StateService) { }

  public getEnergierueckgewinnungs(): Observable<Energierueckgewinnung[]>{
    const headers = this.stateService.headers;
    return this.http.get<Energierueckgewinnung[]>(`${environment.apiURL}energierueckgewinnung/allEnergierueckgewinnungs`, {headers});
  }
}
