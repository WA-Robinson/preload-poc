import { Injectable } from '@angular/core';
import { delay, firstValueFrom, of } from 'rxjs';
import { Ship } from './ship';

@Injectable({
  providedIn: 'root'
})
export class SnapshotApiService {
  private readonly delay = 500;
  private jsonData = {
    fleet: JSON.stringify({
      ships: [
        { name: 'U.S.S. Enterprise' },
        { name: 'U.S.S. Voyager' }
      ]
    }),
    ships: JSON.stringify([{
      name: 'U.S.S. Enterprise',
      registry: 'NCC-1701',
      cargo: {
        summary: '3 items'
      }
    }, {
      name: 'U.S.S. Voyager',
      registry: 'NCC-74656',
      cargo: {
        summary: '2 items'
      }    
    }])
  };

  constructor() { }

  private delayPromise<T>(data: T): Promise<T> {
    return new Promise(
      resolve => setTimeout(resolve, this.delay)
    ).then(() => data);
  }

  getShipFleetSnapshot(): Promise<Ship[]> {    
    return this.delayPromise(JSON.parse(this.jsonData.fleet).ships);
  }

  getShipSnapshot(registry: string): Promise<Ship> {
    const ship = JSON.parse(this.jsonData.ships).find((ship: Ship) => ship.registry === registry);
    if (!ship) return Promise.reject(`Ship ${registry} not found`);
    return this.delayPromise(ship);
  }
}
