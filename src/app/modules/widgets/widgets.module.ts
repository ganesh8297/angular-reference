import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ModalComponent } from './modal/modal.component';
import { StudentModule } from '../student/student.module';
import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    TableComponent,
    DashboardComponent,
    ToasterComponent,
    ModalComponent,
    LoaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule, StudentModule
  ],
  exports: [
    TableComponent,
    DashboardComponent,
    ToasterComponent,
    ModalComponent,
    LoaderComponent,
    CarouselComponent
  ]
})
export class WidgetsModule { }
