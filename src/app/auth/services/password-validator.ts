import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordValidator = (
  control: AbstractControl<string>,
): ValidationErrors | null => {
  const { value } = control;
  let message = '';
  switch (true) {
    case value.length < 8:
      message = 'min 8 characters';
      break;
    case !/(?=.*[a-z])(?=.*[A-Z])/.test(value):
      message = 'a mixture of uppercase and lowercase';
      break;
    case !/(?=.*\d)/.test(value):
      message = 'at least one number';
      break;
    case !/(?=.*\d)(?=.*[@$!%*?&])/.test(value):
      message = 'at least one special character';
      break;
    default:
      return null;
  }
  if (message) {
    return {
      wrongFormat: `You password is't strong enough, it should contain ${message}`,
    };
  }
  return null;
};
