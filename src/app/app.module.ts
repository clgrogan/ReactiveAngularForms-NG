import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, LoginFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
