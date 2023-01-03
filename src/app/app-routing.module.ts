import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';

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
    path: "weather", component: WeatherApiComponent

  },

  {
    path: "forms", component: FormsComponent

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
