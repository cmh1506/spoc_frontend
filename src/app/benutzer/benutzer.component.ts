import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {UserService} from "../service/user.service";
import {User} from "../domain/user";
import {BenutzerDataSource} from "./benutzer-datasource";
import {Router} from "@angular/router";

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
  displayedColumns = ['username', 'role', 'email', 'actions'];

  constructor(private userService: UserService,
              private router: Router) {
    this.dataSource = new BenutzerDataSource();
  }

  ngAfterViewInit(): void {
    this.userService.findAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });


  }

  ngOnInit(): void {
  }


  editBenutzer(id: number) {
    this.router.navigate(['/benutzerForm/edit/' + id]);
  }

  deleteBenutzer(row: any) {
    this.userService.deleteUser(row['id']).subscribe(() =>
      this.userService.findAll().subscribe(data => {
        this.dataSource.data = data;
        this.dataSource?.paginator?._changePageSize(this.dataSource?.paginator?.pageSize);
      })
    );
  }
}
