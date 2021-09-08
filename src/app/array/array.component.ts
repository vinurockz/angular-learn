import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  carDetails: any;
  nameDetails: any;
  regDetails: any;
  lth1m: any;
  filterDetails: any[] = [];
  constructor() {}
  students = [
    { name: 'John', reg: 11, car: null },
    { name: 'vinu', reg: 12, car: true },
    { name: 'manu', reg: 13, car: false },
    { name: 'binu', reg: 14, car: true },
    { name: 'raju', reg: 15, car: false },
    { name: 'sonu', reg: 16, car: true }
  ];
  ngOnInit() {
    this.allArray();
  }

  allArray() {
    this.carDetails = this.students.map(dat => dat.car);
    this.nameDetails = this.students.map(dat => dat.name);
    this.regDetails = this.students.map(dat => dat.reg);
    const fil = this.students.filter(dat => dat.reg < 14);
    for (let i = 0; i < fil.length; i++) {
      this.lth1m = fil.map(dat=>dat.name);
      console.log(this.lth1m);
    }
  }
}
