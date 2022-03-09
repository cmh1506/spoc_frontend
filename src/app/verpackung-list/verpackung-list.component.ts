import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { VerpackungListDataSource } from './verpackung-list-datasource';
import {VerpackungService} from "../service/verpackung.service";
import {Verpackung} from "../domain/verpackung";
import {Router} from "@angular/router";
import {StateService} from "../service/state.service";

@Component({
  selector: 'app-verpackung-list',
  templateUrl: './verpackung-list.component.html',
  styleUrls: ['./verpackung-list.component.css']
})
export class VerpackungListComponent implements AfterViewInit, OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Verpackung>;
  dataSource: VerpackungListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'beschreibung', 'actions'];

  constructor(private verpackungService: VerpackungService,
              private router: Router,
              private stateService: StateService) {
    this.dataSource = new VerpackungListDataSource(verpackungService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.dataSource.getVerpackungs();

  }

  ngOnInit(): void {
    this.verpackungService.findAllForUserId(sessionStorage.getItem("userId")).subscribe(data => {
      this.stateService.verpackungs = data;
    });
  }


  addVerpackung() {
    this.router.navigate(['/verpackungForm'])
  }

  showVerpackungDetail(id: number) {
    this.router.navigate(['/verpackungForm/edit/' + id]);
  }

  deleteVerpackung(row: any) {
    this.verpackungService.deleteVerpackung(row['id']).subscribe(() =>
    this.verpackungService.findAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
    }))

  }
}
