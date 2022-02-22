export interface WeatherRequest {
  summary: 'Partly Cloudy' | 'Mostly Cloudy' | 'Overcast' | 'Clear' | 'Foggy';
  precipType: 'rain' | 'snow' | null;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  visibility: number;
  pressure: number;
}
