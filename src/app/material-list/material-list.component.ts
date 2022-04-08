import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MaterialListDataSource} from './material-list-datasource';
import {Material} from "../domain/material";
import {MaterialService} from "../service/material.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Material>;
  dataSource: MaterialListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private materialService: MaterialService,
              private router: Router) {
    this.dataSource = new MaterialListDataSource(materialService);
  }

  ngAfterViewInit(): void {
    this.materialService.getMaterials().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }


  deleteMaterial(row: any) {
    this.materialService.deleteMaterial(row['id']).subscribe(() =>
      this.materialService.getMaterials().subscribe(data => {
        // Code nicht sauber! Jemand fragen der sich auskennt!
        // @ts-ignore
        this.dataSource?.data = data;
        this.dataSource?.paginator?._changePageSize(this.dataSource?.paginator?.pageSize);
      }));

  }
  addMaterial(): void {
    this.router.navigate(['/materialForm']);
  }

  showMaterialDetail(id: number) {
    this.router.navigate(['/materialForm/edit/' + id]);
  }
}
