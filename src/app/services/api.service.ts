import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaxiFareRequest } from '../models/TaxiFareRequest';
import { WeatherRequest } from '../models/WeatherRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://localhost:7087/api";

  constructor(private http: HttpClient) { }

  public predictTaxiFare(request: TaxiFareRequest) {
    return this.http.post<{ fareAmount: number }>(`${this.baseUrl}/TaxiFare/Predict`, request);
  }

  public predicTemperature(request: WeatherRequest) {
    return this.http.post<{ temperature: number }>(`${this.baseUrl}/Weather/Predict`, request);
  }
}
