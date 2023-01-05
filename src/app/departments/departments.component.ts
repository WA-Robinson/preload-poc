import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  @Input() departments: Department[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
