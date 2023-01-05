import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logNow(event: string): void {
    window.console.log(`${new Date().toISOString()}: ${event}`);
  }
}
