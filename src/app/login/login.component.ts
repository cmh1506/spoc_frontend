import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {User} from "../domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router, private route: ActivatedRoute) { }

  username!: string;
  password!: string;
  user!: User;
  notfound!: string | null;

  ngOnInit(): void {
    this.notfound = this.route.snapshot.paramMap.get('notfound');
  }

  doLogin() {
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("password", this.password);
    this.loginService.login(this.username, this.password);
  }

  doRegister(){
    this.router.navigate(["/registration"]);
  }

}
