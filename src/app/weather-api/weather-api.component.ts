import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {


  weatherDetails: any = [{
    mintemp: "",
    maxtemp: ""
  }]
  error: any = ""
  alert: any = false;


  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.couterCalculation();
  }



  getweather(data: string) {
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + data + "&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534").subscribe(
      (data: any) => {
        console.log(data);
        this.weatherDetails.mintemp = data.main.temp_max;
        this.weatherDetails.maxtemp = data.main.temp_min;
        this.alert = false;
      },
      error => {
        this.alert = true;
      }
    );
  }

  exportData(): void {

    /* pass here the table id */
    let element = document.getElementById('excel-table');
    let element2 = document.getElementById('excel-table');
    const sheet1: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const sheet2: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element2);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, 'Sheet1');
    XLSX.utils.book_append_sheet(wb, sheet2, 'Sheet2');

    /* save to file */
    XLSX.writeFile(wb, 'WeatherData.xlsx');

  }

  days: number = 100;
  hours: number = 10;
  mins: number = 10;
  seconds: number = 10;

  couterCalculation() {
    var futureDate: any = new Date("Tue Dec 13 2023 11:42:28");
    var today: any = new Date();




  }

}
