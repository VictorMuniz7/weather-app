import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiKey = 'eed8c6a17a1f2e2222fc38a4e8bc4dd0'

  constructor(
    private http: HttpClient
  ) { }

  getWeatherByCity(city: string): Observable<WeatherInfo>{
    return this.http.get<WeatherInfo>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`)
  }

}
