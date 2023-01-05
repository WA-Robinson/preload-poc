import { Injectable } from '@angular/core';
import { Observable, concat, tap } from 'rxjs';
import { DataService } from './data.service';
import { LoggingService } from './logging.service';
import { Person } from './person';
import { SnapshotsService } from './snapshots.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private snapshotsSvc: SnapshotsService, 
    private dataSvc: DataService,
    private loggingSvc: LoggingService
  ) { }

  getPerson(id: string): Observable<Person> {
    this.loggingSvc.logNow(`Person ${id} requested`);

    return concat( 
      this.snapshotsSvc.ReadPerson(id),
      this.dataSvc.ReadPerson(id)
    ).pipe(
      tap(() => this.loggingSvc.logNow(`Person ${id} emitting`))
    );
  }
}
