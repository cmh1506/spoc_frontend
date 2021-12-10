import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";
import {Verpackung} from "../domain/verpackung";
import {Materialverwendung} from "../domain/materialverwendung";

@Injectable({
  providedIn: 'root'
})
export class VerpackungService  {

  materialverwendungs!: Materialverwendung[];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Verpackung[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    let url = `${environment.apiURL}verpackung/allVerpackungs`;
    return this.http.get<Verpackung[]>(url, {headers});
  }

  findAllForUserId(id: any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    let url = `${environment.apiURL}verpackung/findAllForUserId/` + sessionStorage.getItem("userId");
    return this.http.get<Verpackung[]>(url, {headers});
  }


  addVerpackung(body: { name: any; beschreibung: any; userId: string | null }) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")) });
    let url = `${environment.apiURL}verpackung/addVerpackung`;
    return this.http.post<Verpackung>(url, body, {headers});
  }
}
