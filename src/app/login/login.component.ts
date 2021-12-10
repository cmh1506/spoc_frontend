import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {User} from "../domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) { }

  username!: string;
  password!: string;
  user!: User;

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.loginService.login(this.username, this.password);
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    resp.subscribe(data => {
      sessionStorage.setItem("userId", data);
      this.router.navigate(["/verpackungen"])
    });
  }

}
