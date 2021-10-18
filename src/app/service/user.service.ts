import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../domain/user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    let url = `${environment.apiURL}users`;
    return this.http.get<User[]>(url);
  }

  /*public save(user: User) {
    var body = {
      username: user.username,
      email: user.email,
      password: user.password
    }
    let url = `${environment.apiURL}addUser`;
    return this.http.post(url, body);
  }*/

  public save(user: User) {
    let url = `${environment.apiURL}addUser`;
    return this.http.post<User>(url, user);
  }

}
