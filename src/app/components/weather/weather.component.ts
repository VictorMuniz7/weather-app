import { Component, OnInit } from '@angular/core';
import { WeatherInfo } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cardInformation!: WeatherInfo

  constructor(
    private weatherService: WeatherService
  ){}

  ngOnInit(): void {
    this.weatherService.getWeatherByCity('Paris').subscribe((data) => {
      this.cardInformation = data
      console.log(this.cardInformation)
    })
  }

}
