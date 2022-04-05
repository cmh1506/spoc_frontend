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
    return this.http.get<User>(`${environment.apiURL}user`,{headers}).subscribe(res => {
        sessionStorage.setItem("userId", res["id"].toString());
        sessionStorage.setItem("userRole", res["role"]);
        sessionStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(["/verpackungen"]);
      }, (error)=>{
      console.log('error from service', error);
      this.router.navigate(["/login/true" ]);
    }
    );
  }
}
