import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AngularMeterialModule } from '../angular-meterial/angular-meterial.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMeterialModule
  ]
})
export class AuthenticationModule { }
