import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  error: any = ""
  alert: any = false;
  getweather(data: string) {
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + data + "&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534").subscribe(
      data => console.log(data),
      error => this.alert = true
    )
  }

}
