import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {UserService} from "../service/user.service";
import {User} from "../domain/user";
import {BenutzerDataSource} from "./benutzer-datasource";

@Component({
  selector: 'app-benutzer',
  templateUrl: './benutzer.component.html',
  styleUrls: ['./benutzer.component.css']
})
export class BenutzerComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource: BenutzerDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'password', 'role', 'email'];

  constructor(private userService: UserService) {
    this.dataSource = new BenutzerDataSource(userService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.dataSource.getUser();
  }
}
