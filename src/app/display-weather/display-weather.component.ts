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
  fiveDayForecast: Forecast[];
  threeHourList: FiveDay[];
  displayData = false;

  ngOnInit() {
    console.log(this.cityName);
    // Call the detailed forecast
    this.getFiveDayData();
    console.log(typeof(this.fiveDayForecast));
  }

  getFiveDayData() {
    this.dataService.getWeatherForecast(this.cityName).subscribe(res => {
      console.log(res);
      this.fiveDayForecast = res.list.filter((element, index) => {
        return index % 8 === 0; // 40 / 5 = 8 - therefore skip over every 8th entry just to get 5 days of data
      });
      this.displayData = true;
      console.log(this.fiveDayForecast);
    }, error => {
      console.error(error);
    });
  }
}
