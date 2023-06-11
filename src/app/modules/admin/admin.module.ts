import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AngularMeterialModule } from '../angular-meterial/angular-meterial.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMeterialModule,
    DirectivesModule
  ]
})
export class AdminModule { }
