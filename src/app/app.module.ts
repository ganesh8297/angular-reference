import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMeterialModule } from './modules/angular-meterial/angular-meterial.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WeatherApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    AngularMeterialModule,HttpClientModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
