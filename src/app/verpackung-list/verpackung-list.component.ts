import { Component, OnInit } from '@angular/core';
import {VerpackungService} from "../service/verpackung.service";
import {Verpackung} from "../domain/verpackung";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verpackung-list',
  templateUrl: './verpackung-list.component.html',
  styleUrls: ['./verpackung-list.component.css']
})
export class VerpackungListComponent implements OnInit {

  constructor(private verpackungService: VerpackungService,
    private router: Router) { }

  verpackungs!: Verpackung[];

  ngOnInit(): void {
    this.verpackungService.findAll().subscribe(data => {
      this.verpackungs = data
    });
  }

  showVerpackungDetail(id: number) {
    this.router.navigate(['/verpackungForm/edit/' + id]);
  }
}
