import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  material = new FormControl('Liebling, es ist aus.');

  updateName() {
    this.material.setValue('Du fängst im Taxi an zu heulen.');
  }

}
