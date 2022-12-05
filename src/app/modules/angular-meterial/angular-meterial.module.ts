import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatGridListModule,
    MatFormFieldModule
  ]
})
export class AngularMeterialModule { }
