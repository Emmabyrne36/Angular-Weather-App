import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../weatherData';
import { FiveDayForecast } from '../fiveDayData';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor() { }

  weatherList = WeatherForecast.weather;
  imageSource = 'http://openweathermap.org/img/w/' + this.weatherList[0].icon + '.png';

  fiveDayList = FiveDayForecast.list;

  ngOnInit() {
    // this.parseDate();
  }

  parseDate() {
    // const firstDate = new Date( 'January 01, 1970 00:00:00');
    // console.log(firstDate.getDate());
    const dateToParse = '2018-10-15 18:00:00';
    const parsedDate = new Date(dateToParse);
    // console.log(parsedDate1);
    // const parsedDate = Date.parse(dateToParse);
    // console.log(dateToParse);
    // console.log(parsedDate1.getDate());
    // console.log(parsedDate1.getTime());
    // console.log(parsedDate1.getUTCHours());
    // console.log(parsedDate1.getUTCDate());
    // console.log(parsedDate1.getUTCDay());
    // console.log(parsedDate1.getUTCFullYear());
    // console.log(parsedDate1.getUTCMonth());

    // these ones are good
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(parsedDate.toLocaleDateString('en-UK', options));
    console.log(parsedDate.toLocaleTimeString('en-UK', options));
  }

}
