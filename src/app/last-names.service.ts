import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastNamesService {
  isLastNameTaken(lastName: string): Observable<boolean> {
    const isTaken = ['Otis'].includes(lastName);

    return of(isTaken)
      .pipe(delay(400));
  }
}
