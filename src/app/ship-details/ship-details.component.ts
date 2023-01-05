import { Component, Input, OnInit } from '@angular/core';
import { Ship } from '../ship';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit {
  @Input() ship: Ship | null = null;
  showCargo = false;
  showDepartments = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewCargo(): void {
    this.showCargo = true;
  }

  viewDepartments(): void {
    this.showDepartments = true;
  }

}
