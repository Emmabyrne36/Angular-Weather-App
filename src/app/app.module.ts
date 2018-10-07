import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { DisplayMapComponent } from './display-map/display-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayWeatherComponent,
    DisplayMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
