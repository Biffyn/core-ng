import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServerValidationError } from '../models/server-validation-error.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() {}

  // public getMessages(form: FormGroup, controlName: string): string[] {
  //   const result: string[] = [];
  //   if (form.controls[controlName] && form.controls[controlName].errors) {
  //     for (const error in form.controls[controlName].errors) {
  //       if (form.controls[controlName].errors.hasOwnProperty(error)) {
  //         result.push(controlName + '.' + error);
  //       }
  //     }
  //   }
  //   return result;
  // }

  public setErrors(form: FormGroup, serverErrors: ServerValidationError[]): void {
    for (const error of serverErrors) {
      form.controls[error.control].markAsDirty();
      form.controls[error.control].setErrors({});
      for (const errorKey of error.errorKeys) {
        form.controls[error.control].errors[errorKey] = true;
      }
    }
  }
}
