import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // This service will send the request to the api to get the weather info
  // Store the result in an interface for easy access
  // private apiKey = 'http://api.openweathermap.org/data/2.5/forecast?q=q=dublin,ie&units=metric&APIID=2a6b039347e89fe17b581588ad3de04b';
  private apiKey = 'http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&units=metric&appid=1e208743817cda8da859d4478014cf83';
  // api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(this.apiKey);
  }
}
