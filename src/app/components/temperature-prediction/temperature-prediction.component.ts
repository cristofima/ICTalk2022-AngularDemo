import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherRequest } from 'src/app/models/WeatherRequest';
import { ApiService } from 'src/app/services/api.service';

interface TemperaturePrediction extends WeatherRequest {
  temperature: number;
}

@Component({
  selector: 'app-temperature-prediction',
  templateUrl: './temperature-prediction.component.html'
})
export class TemperaturePredictionComponent implements OnInit {

  predictions: TemperaturePrediction[] = [];

  formGroup!: FormGroup;

  precipTypes = [
    { name: 'Rain', value: 'rain' },
    { name: 'Snow', value: 'snow' }
  ];

  summary = [
    { name: 'Partly Cloudy', value: 'Partly Cloudy' },
    { name: 'Mostly Cloudy', value: 'Mostly Cloudy' },
    { name: 'Overcast', value: 'Overcast' },
    { name: 'Clear', value: 'Clear' },
    { name: 'Foggy', value: 'Foggy' }
  ];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      summary: new FormControl(null, Validators.required),
      precipType: new FormControl(null),
      humidity: new FormControl(null, Validators.required),
      windSpeed: new FormControl(null, Validators.required),
      windBearing: new FormControl(null, Validators.required),
      visibility: new FormControl(null, Validators.required),
      pressure: new FormControl(null, Validators.required)
    });
  }

  sendRequest() {
    this.apiService.predicTemperature(this.formGroup.value).subscribe(r => {
      let data: TemperaturePrediction = {
        ...this.formGroup.value,
        temperature: r.temperature
      };

      this.predictions.push(data);
      this.formGroup.reset();
    });
  }

}
