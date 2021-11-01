import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Materialverwendung} from "../domain/materialverwendung";

@Injectable({
  providedIn: 'root'
})
export class MaterialverwendungService {

  constructor(private http: HttpClient) { }
  public findAll(): Observable<Materialverwendung[]> {
    let url = `${environment.apiURL}materialverwendung/allMaterialverwendungs`;
    return this.http.get<Materialverwendung[]>(url);
  }
}
