import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {UserService} from "../service/user.service";
import {StateService} from "../service/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(public userService: UserService,
              public stateService: StateService,
              private router: Router) {}

  changePWForm = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: confirmPasswordValidator()});


  onSubmit(): void {
    if (this.changePWForm.invalid) {
      return;
    }
    var body = {
      id: sessionStorage.getItem("userId"),
      password: this.changePWForm.controls['password'].value,
    }
    this.userService.changePW(body).subscribe(() => {
      alert("Ihr Passwort wurde geändert!")
      this.router.navigate(['/verpackungen']);
    });

  }
}

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value != confirmPassword.value) {
      return { confirmPassword: true }
    }
    else {
      return null
    }
  };
}
