import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { NewCourseFormArrayComponent } from './new-course-form-array/new-course-form-array.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, LoginFormComponent, NewCourseFormArrayComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
