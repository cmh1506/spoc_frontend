import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Verarbeitung} from "../domain/verarbeitung";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerarbeitungService {

  constructor(private http: HttpClient) { }

  public getVerarbeitungs(): Observable<Verarbeitung[]>{
    return this.http.get<Verarbeitung[]>(`${environment.apiURL}verarbeitung/allVerarbeitungs`);
  }

  public addVerarbeitung(verarbeitung: Verarbeitung): Observable<Verarbeitung>{
    return this.http.post<Verarbeitung>(`${environment.apiURL}/verarbeitung/addVerarbeitung`, verarbeitung);
  }

  public updateVerarbeitung(verarbeitung: Verarbeitung): Observable<Verarbeitung>{
    return this.http.put<Verarbeitung>(`${environment.apiURL}/verarbeitung/updateVerarbeitung`, verarbeitung);
  }

  public deleteVerarbeitung(verarbeitungId: number): Observable<void>{
    return this.http.delete<void>(`${environment.apiURL}/verarbeitung/updateVerarbeitung/${verarbeitungId}`);
  }
}
