import {Component, OnInit} from '@angular/core';
import {Material} from "./domain/material";
import {MaterialService} from "./service/material.service";
import {User} from "./domain/user";
import {UserService} from "./service/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";



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
              private router: Router,
              private http: HttpClient){
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (error)=>{
      console.log('error from service', error);
      this.router.navigate(["/login/emailTaken" ]);
    });
  }

}
