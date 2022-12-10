import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AngularMeterialModule } from '../angular-meterial/angular-meterial.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMeterialModule,
    FlexModule,
    FlexLayoutModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],

})
export class AuthenticationModule { }
