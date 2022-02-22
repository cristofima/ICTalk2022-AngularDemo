import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiFirePredictionComponent } from './components/taxi-fire-prediction/taxi-fire-prediction.component';
import { TemperaturePredictionComponent } from './components/temperature-prediction/temperature-prediction.component';

const routes: Routes = [
  {
    path: 'taxi-fare-prediction',
    component: TaxiFirePredictionComponent
  },
  {
    path: 'temperature-prediction',
    component: TemperaturePredictionComponent
  },
  {
    path: '',
    redirectTo: 'taxi-fare-prediction',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
