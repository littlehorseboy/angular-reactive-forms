import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbidden: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenValidator]'
})
export class ForbiddenValidatorDirective {

  constructor() { }

}
