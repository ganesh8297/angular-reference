import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/authentication/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "authentication/landingPage",
  },

  {
    path: "authentication",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then(
        (m) => m.AdminModule
      ),
  },
  {
    path: "student",
    loadChildren: () =>
      import("./modules/student/student.module").then(
        (m) => m.StudentModule
      ),
  },
  {
    path: "widgets",
    loadChildren: () =>
      import("./modules/widgets/widgets.module").then(
        (m) => m.WidgetsModule
      ),
  },

  {
    path: "**",
    component: NotFoundComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
