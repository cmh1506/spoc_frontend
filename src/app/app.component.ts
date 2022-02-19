import {Component, OnInit} from '@angular/core';
import {Material} from "./domain/material";
import {MaterialService} from "./service/material.service";
import {User} from "./domain/user";
import {UserService} from "./service/user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {BenutzerComponent} from "./benutzer/benutzer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public materials: Material[] | undefined;
  public users: User[] | undefined;

  constructor(private materialService: MaterialService,
              private userService: UserService,
              private router: Router){}

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
