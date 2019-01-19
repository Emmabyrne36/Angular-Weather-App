import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherForecast } from './weatherData';
import { Weather } from './weather';
import { DataService } from './data.service';
import { TitleCasePipe } from '@angular/common';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';

// // declare the js function
// declare function loadMap(): any;
declare function updateMapPushPin(lat, lon, cityName, weather): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  @ViewChild('f') cityForm: NgForm;
  @ViewChild(DisplayWeatherComponent) displayWeatherComponent: DisplayWeatherComponent;

  resultsFound = false;
  cityName: string;

  weatherResult: Weather;
  lat: number;
  lon: number;
  weatherSnapshot: string[];

  constructor(private dataService: DataService) {}

  weatherList = WeatherForecast.weather;
  imageSource = 'http://openweathermap.org/img/w/' + this.weatherList[0].icon + '.png';

  ngOnInit() {
  }


  onSubmit() {
    // get the city value inputted by the user and convert it to titlecase - trim it to ensure no trailing whitespace affects API call
    this.cityName = this.toTitleCase(this.cityForm.value.userData.city).trim();
    // Call the dataService to make a call to the weather API and store the results
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.dataService.getCurrentWeather(this.cityName).subscribe(res => {
      this.weatherResult = res;
      this.lat = res.coord.lat;
      this.lon = res.coord.lon;
      this.weatherSnapshot = [this.weatherResult.main.temp.toString(), this.weatherResult.weather[0].main];

      // To update the map pushpin
      updateMapPushPin(this.lat, this.lon, this.cityName, this.weatherSnapshot); // update the position of the map and the pushpin
      if (this.resultsFound) {
        // Just refresh the data by calling the getFiveDayData method from display weather component
        this.displayWeatherComponent.cityName = this.cityName;
        this.displayWeatherComponent.refreshWeather();
      } else {
        this.resultsFound = true; // to display the data as there is no error
      }
    }, error => {
      console.error(error);
      alert('There was an error finding weather data for city: ' + this.cityName + '\nPlease try again');
      // Clear the form
      this.cityForm.reset();
    });
  }

  toTitleCase(name: string): string {
    const titleCaseName = new TitleCasePipe().transform(name);
    return titleCaseName;
  }
}
