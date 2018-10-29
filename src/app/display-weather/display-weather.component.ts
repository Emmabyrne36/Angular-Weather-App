import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecast } from '../weatherData';
import { FiveDayForecast } from '../fiveDayData';
import { DataService } from '../data.service';
import { FiveDay, Forecast } from '../fiveDay';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {
  // Create input property here so the name of the city gets passed in
  @Input() cityName: string;

  constructor(private dataService: DataService) { }

  weatherList = WeatherForecast.weather;
  imageSource = 'http://openweathermap.org/img/w/' + this.weatherList[0].icon + '.png';

  fiveDayList = FiveDayForecast.list;
  newFiveDayList: Forecast[];
  threeHourList: FiveDay[];

  ngOnInit() {
    console.log(this.cityName);
    // Call the detailed forecast
    this.dataService.getWeatherForecast(this.cityName).subscribe(res => {
      this.newFiveDayList = res.list;
      console.log(this.newFiveDayList);
    }, error => {
      console.error(error);
    });
  }

  // Get just the 5 day data
  parseFiveDayData(forecastList: FiveDay[]): void {
    // Iterate through the array backwards - skip 8 each time
    // for (let i = forecastList.length - 1; i >= 0; i-=8) {
      
    // }
  }
}
