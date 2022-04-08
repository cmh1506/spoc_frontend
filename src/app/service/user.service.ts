import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../domain/user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Material} from "../domain/material";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private stateService: StateService) { }

  public findAll(): Observable<User[]> {
    const headers = this.stateService.headers;
    return this.http.get<User[]>(`${environment.apiURL}user/users`, {headers});
  }

  addUser(body: any) {
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}user/addUser`;
    return this.http.post<User>(url, body, {headers});
  }

  deleteUser(id: number) {
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}user/delete/` + id;
    return this.http.delete(url, {headers});
  }

    changePW(body: { password: any; id: string | null }) {
      const headers = this.stateService.headers;
      let url = `${environment.apiURL}user/changePW`;
      return this.http.post(url, body, {headers});
    }

  findUserById(benutzerId: number): {[key: string]: any} {
    const headers = this.stateService.headers;
    return this.http.get(`${environment.apiURL}user/findUserById/` + benutzerId, {headers});
  }

  updateUser(body: any) {
    const headers = this.stateService.headers;
    let url = `${environment.apiURL}user/updateUser`;
    return this.http.put<User>(url, body, {headers});

  }
}
