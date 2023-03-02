import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SigninComponent } from './signin/signin.component';

// https://youtu.be/ariLHGm-u3E
// https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3488235052
// video1 https://www.youtube.com/watch?v=J9Hzizv22cQ 

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    ProfileUserComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
