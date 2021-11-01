import { Component, OnInit } from '@angular/core';
import {User} from "../domain/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users!: User[];

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}