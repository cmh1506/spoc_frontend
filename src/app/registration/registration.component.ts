import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../domain/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required]
  });
  fehler = new Map();

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  public user: User | undefined;
  onSubmit(): void {
    var body = {
      username: this.registrationForm.controls['username'].value,
      email: this.registrationForm.controls['email'].value
    }
    this.userService.addUser(body).subscribe(res => {
      this.user = res;
      this.router.navigate(['/registration']);
    }, (error)=>{
      console.log('error from service', error);
      if (error.status === 422) {
        this.fehler.set("422", "Die Email-Adresse wird schon verwendet!");
      }
      if (error.status === 423) {
        this.fehler.set("423", "Der Benutzername ist schon vergeben!");
      }
    });
  }
}
