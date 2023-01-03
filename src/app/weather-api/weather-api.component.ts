import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Users } from '../users'
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})


export class WeatherApiComponent implements OnInit {
  days: any = 0;
  hours: any = 0;
  mins: any = 0;
  seconds: any = 0;
  weatherDetails: any = [{
    mintemp: "",
    maxtemp: ""
  }]
  error: any = ""
  alert: any = false;
  userdetails: any;
  searchvalue: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    
    this.sorted = this.datas.sort((a: any, b: any) => a.first_name > b.first_name ? 1 : -1);
    console.log(this.sorted);

    this.http.get('/assets/userdata.json').subscribe(data => {
      // console.log(data);
      // console.log(JSON.stringify(data));
      this.userdetails = data;
    })
    // this.documents.forEach((document: any) =>
    //   this.documentsControl.push(
    //     this.fb.group({
    //       id: [document.id],
    //       name: [document.name],
    //       service_item_id: [document.service_item_id]
    //     })
    //   )
    // );
  }

  sorted: any = []



  x = setInterval(() => {
    var futureDate: any = new Date("12 14 2022 12:14:28").getTime();
    var today: any = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    this.seconds = Math.floor((distance % (1000 * 60)) / (1000))
    if (distance < 0) {
      clearInterval(this.x);
      this.days = this.hours = this.mins = this.seconds = "Offer Expired";
    }
  }, 1000)

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


  myForm: any = this.fb.group({
    documents: this.fb.array([])
  });

  //   get documentsControl(): FormArray {


  // return this.myForm.get("documents") as FormArray;
  //   }



  // documents: any = [
  //   { id: 1, service_item_id: "", name: "document 1" },
  //   { id: 2, service_item_id: "", name: "document 2" },
  // ];


  // submitForm() {
  //   var length = this.myForm.value.documents?.length;
  //   console.log(this.myForm.value.documents[length - 1]);
  //   this.myForm.value.documents[length - 1].service_item_id = this.TotalValue - this.myForm.value.documents[length - 2].service_item_id
  //   this.documents = this.myForm.value.documents;
  //   console.log(this.documents);



  // }



  // add() {
  //   this.documentsControl.push(
  //     this.fb.group({
  //       id: [null],
  //       name: [null],
  //       service_item_id: [null]
  //     })
  //   );
  // }


  TotalValue: any = 100;
  ValueArray: any = [];
  remainidata: any = "";
  clickMethod() {
    var values: any = prompt("Enter the Value");
    this.remainidata = (values);
    if (this.ValueArray.length == 0) {
      var data = this.TotalValue - values;
    } else {
      var data = this.ValueArray.at(-1) - values;
    }


    if (data >= 0) {
      this.ValueArray.push(data);
      console.log(this.ValueArray);
    } else {
      this.remainidata = 0;
      alert("Number cannot Be Negative")
    }


  }
  datas = [
    { position: 1, first_name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, first_name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, first_name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, first_name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, first_name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, first_name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, first_name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, first_name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, first_name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, first_name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  columnNames = Object.keys(this.datas[0]);

  separate(s: string): string {
    return s.replace("_", " ");
  }


  users: any = [{ "id": 5922, "name": "Rev. Parvati Kapoor", "email": "parvati_kapoor_rev@wisozk.org", "gender": "male", "status": "active" }, { "id": 5911, "name": "Msgr. Brahmdev Rana", "email": "msgr_brahmdev_rana@kulas.io", "gender": "female", "status": "active" }, { "id": 5910, "name": "Bhamini Panicker", "email": "bhamini_panicker@pacocha.name", "gender": "male", "status": "active" }, { "id": 5909, "name": "Swara Chopra", "email": "chopra_swara@lockman-auer.io", "gender": "female", "status": "inactive" }, { "id": 5908, "name": "Dr. Manisha Abbott", "email": "abbott_manisha_dr@turner.co", "gender": "female", "status": "inactive" }, { "id": 5907, "name": "Chandan Nair", "email": "nair_chandan@kovacek.name", "gender": "male", "status": "active" }, { "id": 5906, "name": "Anasooya Adiga", "email": "adiga_anasooya@smith-hickle.name", "gender": "female", "status": "inactive" }, { "id": 5905, "name": "Chandini Shah", "email": "chandini_shah@oreilly-leuschke.io", "gender": "female", "status": "active" }, { "id": 5904, "name": "Chandi Joshi", "email": "joshi_chandi@schinner-stanton.name", "gender": "female", "status": "inactive" }, { "id": 5903, "name": "Devani Kaul", "email": "devani_kaul@gerlach-yost.biz", "gender": "female", "status": "active" }]




  performedAction: any = []
  action(data: any) {
    this.performedAction.push(data);
    console.log(this.performedAction);
  }
  value: any = ""
  selectedValue(data: any) {
    if (data.target.checked == true) {
      this.value = data.target.value
    }
    console.log(this.value);

  }


  performaction() {
    for (var i = 0; i < this.performedAction.length; i++) {

      this.performedAction[i].status = this.value


    }

    this.users.map((item: any) => this.performedAction.find((data: any) => data.id === item.id) || item);

  }


  count: any = "";

  changed() {
    this.count = 0;
    this.users.forEach((item: any) => {
      if (item.checked) {
        this.count = this.count + 1
      }
    }
    
    )
    console.log(this.count);
  }
}


