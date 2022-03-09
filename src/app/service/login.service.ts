import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {StateService} from "./state.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated = false;
  private res: Object | undefined;

  constructor(private http:HttpClient,
              private stateService: StateService,
              private router: Router) { }
  credentials = {username: '', password: ''};
  public login(username: string, password: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    this.stateService.headers = headers;
    return this.http.get(`${environment.apiURL}user`,{headers}).subscribe(res => {
      // @ts-ignore
        sessionStorage.setItem("userId", res)
        this.router.navigate(["/verpackungen"]);
    }

    );

    /*this.credentials.username = username;
    this.credentials.password = password;

    this.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    return false;*/
  }
  public authenticate(credentials: { username: any; password: any; }, callback: { (): void; (): any; }) {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(`${environment.apiURL}user`, {headers: headers}).subscribe(response => {
      // @ts-ignore
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }
}
