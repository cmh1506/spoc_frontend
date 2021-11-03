import {Component, OnInit} from '@angular/core';
import {Material} from "./domain/material";
import {MaterialService} from "./service/material.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "./domain/user";
import {UserService} from "./service/user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

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
    this.getMaterials();
    this.getUsers();
    this.router.navigate(['/verpackungen']);
  }

  public getUsers(): void {
    this.userService.findAll().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMaterials(): void {
    this.materialService.getMaterials().subscribe(
      (response: Material[]) => {
        this.materials = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(user: User, mode: string): void {
    const button = document.createElement('button');
    button.type = 'button';


  }

  public onAddUser(addForm: NgForm): void {

  }
}
