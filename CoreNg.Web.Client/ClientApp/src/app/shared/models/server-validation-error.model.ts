export class ServerValidationError {
  public control: string;
  public errorKeys: string[];

  public constructor(newInstance?: ServerValidationError) {
    if (!newInstance) {
      return;
    }

    this.control = newInstance.control;
    this.errorKeys = newInstance.errorKeys;
  }
}
