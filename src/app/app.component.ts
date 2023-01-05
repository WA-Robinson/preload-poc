import { Component } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, firstValueFrom, Observable, of, Subject } from 'rxjs';
import { LoggingService } from './logging.service';
import { Ship } from './ship';
import { ShipDataService } from './ship-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preload-poc';
  selectedShip$: Observable<Ship> = EMPTY;
  
  constructor(private shipSvc: ShipDataService, private logService: LoggingService) { }

  selectShip(ship: Ship): void {
    this.selectedShip$ = this.shipSvc.GetShipDetails(ship.registry);
  }
}
