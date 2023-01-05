import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private loggingSvc: LoggingService) { }

  ReadPerson(id: string): Observable<Person> {
    const person = new Person();
    person.initials = 'A.B.';
    person.id = id;
    person.firstName = 'Alpha';
    person.lastName = 'Beta';
    person.age = '21';

    this.loggingSvc.logNow(`Person ${id} data requested`);
    
    return of(person).pipe(delay(1000));
  }
}
