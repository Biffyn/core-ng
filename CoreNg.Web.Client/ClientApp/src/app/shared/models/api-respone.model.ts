import { ServerValidationError } from './server-validation-error.model';

export class ApiResponse<T> {
  public data: T;
  public errors: ServerValidationError[];
}
