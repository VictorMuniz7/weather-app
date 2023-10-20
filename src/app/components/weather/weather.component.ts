import { Component } from '@angular/core';
import { WeatherInfo } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  cardInformation!: WeatherInfo
  city: string = ''
  isLoading = false
  notFound = false

  constructor(
    private weatherService: WeatherService
  ){}



  onSubmit(){
    this.isLoading = true
    if(this.city){
      this.weatherService.getWeatherByCity(this.city).subscribe({
        next: (data) => {
        this.city = ''
        this.cardInformation = data
        this.isLoading = false
      },error: (err) => {
        this.notFound = true
        this.isLoading = false
      }
      })

    }

  }

}
