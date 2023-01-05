import { Component, Input, OnInit } from '@angular/core';
import { Cargo } from '../cargo';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {
  @Input() cargo: Cargo | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
