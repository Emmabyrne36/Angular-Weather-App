import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { FiveDay } from './fiveDay';
import { String } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // This service will send the request to the api to get the weather info
  // Store the result in an interface for easy access
  private forecastApi = 'http://api.openweathermap.org/data/2.5/forecast?q={0}&units=metric&appid=2a6b039347e89fe17b581588ad3de04b';
  private apiKey = `http://api.openweathermap.org/data/2.5/weather?q={0},ie&units=metric&appid=1e208743817cda8da859d4478014cf83`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<Weather> {
    // return this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${city}` +
    //                              `&units=metric&appid=1e208743817cda8da859d4478014cf83`);
    return this.http.get<Weather>(String.Format(this.apiKey, city));
  }

  getWeatherForecast(city: string): Observable<FiveDay> {
    // return this.http.get<FiveDay>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}` +
    //                               `&units=metric&appid=2a6b039347e89fe17b581588ad3de04b`);
    return this.http.get<FiveDay>(String.Format(this.forecastApi, city));
  }
}
