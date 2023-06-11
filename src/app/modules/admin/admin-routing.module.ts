import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "adminDashboard",
        component: AdminDashboardComponent
      },
      {
        path: "adminProfile",
        component: AdminProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
