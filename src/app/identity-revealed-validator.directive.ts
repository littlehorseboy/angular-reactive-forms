import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (
  control: FormGroup,
): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');
  return firstName
    && lastName
    && firstName.value === lastName.value ? { identityRevealed: true } : null;
};

@Directive({
  selector: '[appIdentityRevealedValidator]'
})
export class IdentityRevealedValidatorDirective {

  constructor() { }

}
