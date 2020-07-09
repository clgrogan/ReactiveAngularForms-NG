import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "../common/validators/username.validators";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent {
  deForm = new FormGroup({
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.mustBeUnique
    ),
    password: new FormControl("", Validators.required),
  });
  // We can create properties for the class instance to give access to the form control object properties and their attributes/methods
  get username() {
    return this.deForm.get("username");
  }
  get password() {
    return this.deForm.get("password");
  }
}
