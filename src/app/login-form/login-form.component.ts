import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "../common/validators/username.validators";

@Component({
  selector: "login-form",
  templateUrl: "./login-form.component.html",
})
export class LoginFormComponent {
  deForm = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.mustBeUnique
      ),
    }),
    password: new FormControl("", Validators.required),
  });

  login() {
    // let isValid = authService.login(this.deForm.value);
    const isValid = false;
    if (!isValid) {
      this.deForm.setErrors({
        invalidLogin: true,
      });
    }
  }
  // We can create properties for the class instance to give access to the form control object properties and their attributes/methods
  get username() {
    return this.deForm.get("account.username"); //username is nested in the account FormGroup.
  }
  get password() {
    return this.deForm.get("password"); //password is directly under deForm
  }
}
