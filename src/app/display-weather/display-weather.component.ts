import { Component, OnInit, Input } from '@angular/core';
import { FiveDayForecast } from '../fiveDayData';
import { DataService } from '../data.service';
import { FiveDay, Forecast } from '../fiveDay';
import { Weather } from '../weather';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {
  // Create input property here so the name of the city gets passed in
  @Input() cityName: string;
  currentWeather: Weather;
  fiveDayForecast: Forecast[];
  displayData = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.refreshWeather();
  }

  refreshWeather(): any {
    // Get the current weather
    this.getCurrentWeather();
    // Call the detailed forecast
    this.getFiveDayData();
  }

  getCurrentWeather(): any {
    this.dataService.getCurrentWeather(this.cityName).subscribe(res => {
      this.currentWeather = res;
    }, error => {
      console.error(error);
    });
  }

  getFiveDayData() {
    this.dataService.getWeatherForecast(this.cityName).subscribe(res => {
      this.fiveDayForecast = res.list.filter((element, index) => {
        return index % 8 === 0; // 40 / 5 = 8 - therefore skip over every 8th entry just to get 5 days of data
      });
      this.displayData = true;
    }, error => {
      console.error(error);
    });
  }
}
