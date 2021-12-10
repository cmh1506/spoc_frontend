import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Energierueckgewinnung} from "../domain/energierueckgewinnung";

@Injectable({
  providedIn: 'root'
})
export class EnergierueckgewinnungService {

  constructor(private http: HttpClient) { }

  public getEnergierueckgewinnungs(): Observable<Energierueckgewinnung[]>{
    return this.http.get<Energierueckgewinnung[]>(`${environment.apiURL}energierueckgewinnung/allEnergierueckgewinnungs`);
  }
}
