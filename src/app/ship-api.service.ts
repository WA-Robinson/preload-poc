import { Injectable } from '@angular/core';
import { interval, Observable, timer, map, of, delay, firstValueFrom } from 'rxjs';
import { Ship } from './ship';

@Injectable({
  providedIn: 'root'
})
export class ShipApiService {
  private DelayMS = 3000;
  private data: Ship[] = [
    {
      name: 'U.S.S. Enterprise',
      registry: 'NCC-1701',
      departments: [{
        name: 'Engineering',
        crew: 20
      }, {
        name: 'Medical', 
        crew: 30
      }, {
        name: 'Security',
        crew: 40
      }],
      cargo: {
        items: [{
          description: 'Tribbles',
          mass: 10
        }, {
          description: 'Medical Supplies',
          mass: 20
        }, {
          description: 'Dylithium Crystals',
          mass: 30
        }],
        totalMass: 60,
        summary: '3 items'
      }
    }, {
      name: 'U.S.S. Voyager',
      registry: 'NCC-74656',
      departments: [{
        name: 'Engineering', 
        crew: 30
      }, {
        name: 'Science',
        crew: 50
      }],
      cargo: {
        totalMass: 200,
        summary: '2 items',
        items: [{
          description: 'Survey Equipment',
          mass: 12
        }, {
          description: 'Salvage Material',
          mass: 23
        }]
      }
    }
  ];

  constructor() { }

  private delayData<T>(source: T): Promise<T> {
    return firstValueFrom(
      of(source).pipe(delay(this.DelayMS))
    );
  }

  getFleet(): Promise<Ship[]> {    
    return this.delayData(this.data)
  }

  getShip(registry: string): Promise<Ship> {
    const ship = this.data.find((ship) => ship.registry === registry);
    if (!ship) return Promise.reject(`Ship ${registry} not found.`);
    return this.delayData(ship);
  }
}
