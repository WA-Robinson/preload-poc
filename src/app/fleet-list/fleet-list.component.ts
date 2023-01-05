import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../ship';
import { ShipDataService } from '../ship-data.service';

@Component({
  selector: 'app-fleet-list',
  templateUrl: './fleet-list.component.html',
  styleUrls: ['./fleet-list.component.scss']
})
export class FleetListComponent implements OnInit {
  @Output() shipSelected = new EventEmitter<Ship>();
  ships$: Observable<Ship[]>;

  constructor(private shipDataSvc: ShipDataService) { 
    this.ships$ = this.shipDataSvc.GetFleetList();
  }

  ngOnInit(): void {
  }

  onShipSelected(ship: Ship): void {
    this.shipSelected.emit(ship);
  }
}
