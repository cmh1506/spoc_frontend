import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Verpackung} from "../domain/verpackung";
import {VerpackungService} from "../service/verpackung.service";

@Component({
  selector: 'app-verpackung-form',
  templateUrl: './verpackung-form.component.html',
  styleUrls: ['./verpackung-form.component.css']
})
export class VerpackungFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private verpackungService: VerpackungService) { }

  verpackung!: Verpackung | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.verpackungService.findAll().subscribe(data => {this.verpackung = data.find(verpackung => verpackung.id === id)});
  }

}
