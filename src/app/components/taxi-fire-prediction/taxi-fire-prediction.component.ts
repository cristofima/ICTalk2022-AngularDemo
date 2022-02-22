import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaxiFareRequest } from 'src/app/models/TaxiFareRequest';
import { ApiService } from 'src/app/services/api.service';

interface TaxiFarePrediction extends TaxiFareRequest {
  fareAmount: number;
}

@Component({
  selector: 'app-taxi-fire-prediction',
  templateUrl: './taxi-fire-prediction.component.html'
})
export class TaxiFirePredictionComponent implements OnInit {

  predictions: TaxiFarePrediction[] = [];

  formGroup!: FormGroup;

  vendorID = [
    { name: 'CMT', value: 'CMT' },
    { name: 'VTS', value: 'VTS' }
  ];

  paymentTypes = [
    { name: 'CRD', value: 'CRD' },
    { name: 'CSH', value: 'CSH' },
    { name: 'DIS', value: 'DIS' },
    { name: 'NOC', value: 'NOC' },
    { name: 'UNK', value: 'UNK' },
  ];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      vendorId: new FormControl(null, Validators.required),
      rateCode: new FormControl(null, Validators.required),
      passengerCount: new FormControl(null, Validators.required),
      tripDistance: new FormControl(null, Validators.required),
      paymentType: new FormControl(null, Validators.required)
    });
  }

  sendRequest() {
    this.apiService.predictTaxiFare(this.formGroup.value).subscribe(r => {
      let data: TaxiFarePrediction = {
        ...this.formGroup.value,
        fareAmount: r.fareAmount
      };

      this.predictions.push(data);
      this.formGroup.reset();
    });
  }

}
