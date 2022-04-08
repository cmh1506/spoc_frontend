import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BenutzerComponent} from "../benutzer/benutzer.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {User} from "../domain/user";

@Component({
  selector: 'app-benutzer-form',
  templateUrl: './benutzer-form.component.html',
  styleUrls: ['./benutzer-form.component.css']
})
export class BenutzerFormComponent implements OnInit {
  benutzerForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required],
    email: [null, Validators.required],
    accountNonExpired: [true],
    accountNonLocked: [true],
    credentialsNonExpired: [true],
    enabled: [true]
  });

  benutzerId: number | undefined;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private currentRoute: ActivatedRoute) {}

  onSubmit(): void {
    var body = {
      id: this.benutzerId,
      username: this.benutzerForm.controls['username'].value,
      password: this.benutzerForm.controls['password'].value,
      role: this.benutzerForm.controls['role'].value,
      email: this.benutzerForm.controls['email'].value,
      accountNonExpired: this.benutzerForm.controls['accountNonExpired'].value,
      accountNonLocked: this.benutzerForm.controls['accountNonLocked'].value,
      credentialsNonExpired: this.benutzerForm.controls['credentialsNonExpired'].value,
      enabled: this.benutzerForm.controls['enabled'].value
    }
    this.userService.updateUser(body).subscribe(() => {
      this.router.navigate(['/users']);
    });

  }

  ngOnInit(): void {
    this.benutzerId = Number(this.currentRoute.snapshot.paramMap.get('id'))
    if(this.benutzerId){
      this.userService.findUserById(this.benutzerId).subscribe((res: { [x: string]: any; }) => {
        this.benutzerForm = this.fb.group({
          username: [res["username"]],
          password: [res["password"]],
          role: [res["role"]],
          email: [res["email"]],
          accountNonExpired:[res["accountNonExpired"]],
          accountNonLocked:[res["accountNonLocked"]],
          credentialsNonExpired:[res["credentialsNonExpired"]],
          enabled:[res["enabled"]]
        })
      });
    }
  }
}
