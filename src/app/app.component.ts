import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherForecast } from './weatherData';
import { Weather } from './weather';

// // declare the js function
// declare function loadMap(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  @ViewChild('f') cityForm: NgForm;
  resultsFound = false;

  weatherList = WeatherForecast.weather;
  imageSource = 'http://openweathermap.org/img/w/' + this.weatherList[0].icon + '.png';

  ngOnInit() {
  }


  onSubmit() {
    console.log('this is the form');
    console.log(this.cityForm.value.userData.city);
    this.resultsFound = true;
  }
}
