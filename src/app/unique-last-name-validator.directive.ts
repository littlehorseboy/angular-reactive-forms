import { Directive, Injectable, forwardRef } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { LastNamesService } from './last-names.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueLastNameValidator implements AsyncValidator {
  constructor(
    private lastNamesService: LastNamesService,
  ) { }

  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.lastNamesService.isLastNameTaken(control.value)
      .pipe(
        map((isTaken) => (isTaken ? { isUnique: false } : null)),
        catchError(() => of(null)),
      );
  }
}

@Directive({
  selector: '[appUniqueLastNameValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UniqueLastNameValidator),
    multi: true,
  }],
})
export class UniqueLastNameValidatorDirective {
  constructor(
    private validator: UniqueLastNameValidator
  ) { }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
