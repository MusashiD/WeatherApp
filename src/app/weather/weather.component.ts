import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cidade="Uberaba";
  constructor(public weatherService: WeatherService) {
    console.log(this.weatherService.weather)

  }
  pesquisarCidade(cidade:string|null){
    this.weatherService.getWeatherData(cidade).then(()=>
    this.cidade = cidade[0].toUpperCase() + cidade.substring(1)
 ).catch(() => this.cidade='cidade não existe')
 }


  ngOnInit() {
  }
}

