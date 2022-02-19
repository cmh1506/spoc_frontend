import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Materialverwendung} from "../domain/materialverwendung";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class MaterialverwendungService {

  constructor(private http: HttpClient,
        private stateService: StateService) { }
  public findAllForVerpackungsId(id: number): Observable<Materialverwendung[]> {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}materialverwendung/findAllByVerpackung/` + id;
    return this.http.get<Materialverwendung[]>(url, {headers});
  }

  public addMaterialVerwendung(body: { verarbeitungId: any; recyclingverfahrenId: any; materialId: any }): Observable<Materialverwendung> {
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}materialverwendung/addMaterialverwendung`;
    return this.http.post<Materialverwendung>(url, body, {headers});
  }

  deleteMaterialverwendung(id: number) {
    //const headers = this.stateService.headers;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    let url = `${environment.apiURL}materialverwendung/delete/` + id;
    return this.http.delete(url, {headers});

  }
}
