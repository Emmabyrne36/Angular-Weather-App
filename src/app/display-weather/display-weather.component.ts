import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../weatherData';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor() { }

  weatherList = WeatherForecast.weather;
  imageSource = 'http://openweathermap.org/img/w/' + this.weatherList[0].icon + '.png';

  ngOnInit() {
  }

}
