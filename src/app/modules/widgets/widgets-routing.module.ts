import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToasterComponent } from './toaster/toaster.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "modal",
        component: ModalComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "toaster",
        component: ToasterComponent
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
