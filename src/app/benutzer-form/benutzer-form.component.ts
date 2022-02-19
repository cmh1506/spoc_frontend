import {Component, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
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
export class BenutzerFormComponent {
  benutzerForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {}

  onSubmit(): void {
    var body = {
      username: this.benutzerForm.controls['username'].value,
      password: this.benutzerForm.controls['password'].value,
      role: this.benutzerForm.controls['role'].value,
      email: this.benutzerForm.controls['email'].value
    }
    this.userService.addUser(body).subscribe(() => {
      this.router.navigate(['/users']);
    });

  }
}
