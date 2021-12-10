import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Transportmittel} from "../domain/transportmittel";

@Injectable({
  providedIn: 'root'
})
export class TransprotmittelService {

  constructor(private http: HttpClient) { }
  public getTransportmittels(): Observable<Transportmittel[]>{
    return this.http.get<Transportmittel[]>(`${environment.apiURL}transportmittel/allTransportmittels`);
  }
}
