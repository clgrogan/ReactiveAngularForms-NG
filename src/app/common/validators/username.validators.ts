import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // *.value is type any, but we want to handle as string
    if ((control.value as string).indexOf(" ") !== -1) {
      return { cannotContainSpace: true }; // key: value pair. key is a string value is type any, we returned bool.
    } else {
      return null;
    }
  }

  static mustBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string).toLowerCase() === "curt") {
          resolve({ mustBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2222);
    });
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    // implement a simple rule and emulate a call to the
    // server by setting timer.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Timeout Expired. {control.value}=", control.value);
        if (control.value === "curt") resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 5555);
    });
  }
}
