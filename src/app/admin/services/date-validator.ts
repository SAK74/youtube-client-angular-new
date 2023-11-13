import { AbstractControl, ValidationErrors } from '@angular/forms';

export const dateValidator = (
  control: AbstractControl<string>,
): ValidationErrors | null => {
  const inputData = new Date(control.value);
  if (inputData.getTime() > Date.now()) {
    return {
      dateInFuture: true,
    };
  }
  return null;
};
