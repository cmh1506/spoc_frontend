import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";
import {Verpackung} from "../domain/verpackung";

@Injectable({
  providedIn: 'root'
})
export class VerpackungService  {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Verpackung[]> {
    let url = `${environment.apiURL}verpackung/allVerpackungs`;
    return this.http.get<Verpackung[]>(url);
  }
}
