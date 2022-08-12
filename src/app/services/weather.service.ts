import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather = {};
  wind = {}
  constructor(private httpClient: HttpClient){
    this.getWeatherData();

  }

  async getWeatherData(cidade = 'Uberaba'){
    const requisicao = await this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=6b02863d07fcc2226ed1631a23170ac1`).toPromise();
    this.weather = await requisicao.main;
     this.wind = await requisicao.wind;


  }
}

