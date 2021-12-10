import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
              private stateService: StateService) { }

  public login(username: string, password: string): Observable<string>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.stateService.headers = headers;
    return this.http.get<string>(`${environment.apiURL}spoclogin`,{headers, responseType: 'text' as 'json'})
  }
}
