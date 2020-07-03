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
}
