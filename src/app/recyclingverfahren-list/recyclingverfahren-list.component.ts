import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RecyclingverfahrenListDataSource } from './recyclingverfahren-list-datasource';
import {RecyclingverfahrenService} from "../service/recyclingverfahren.service";
import {Recyclingverfahren} from "../domain/recyclingverfahren";

@Component({
  selector: 'app-recyclingverfahren-list',
  templateUrl: './recyclingverfahren-list.component.html',
  styleUrls: ['./recyclingverfahren-list.component.css']
})
export class RecyclingverfahrenListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Recyclingverfahren>;
  dataSource: RecyclingverfahrenListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private recyclingverfahrenService: RecyclingverfahrenService) {
    this.dataSource = new RecyclingverfahrenListDataSource(recyclingverfahrenService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.dataSource.getRecyclingverfahren();
  }
}
