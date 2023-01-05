import { Injectable } from '@angular/core';
import { of, Observable, from, concat, map, filter, Subject, catchError } from 'rxjs';
import { LoggingService } from './logging.service';
import { Ship } from './ship';
import { ShipApiService } from './ship-api.service';
import { SnapshotApiService } from './snapshot-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipDataService {

  constructor(
    private shipApi: ShipApiService, 
    private shipSnapshotApi: SnapshotApiService,
    private logService: LoggingService
  ) { }

  GetFleetList(): Observable<Ship[]> {    
    return concat(
      from(this.shipSnapshotApi.getShipFleetSnapshot()),
      from(this.shipApi.getFleet()),
    );
  }

  GetShipDetails(registry: string): Observable<Ship> {
    return concat(
      from(this.shipSnapshotApi.getShipSnapshot(registry)),
      from(this.shipApi.getShip(registry))
    ).pipe(
      catchError((err) => {
        this.logService.logNow(err); throw err;
      })
    );
  }
}
