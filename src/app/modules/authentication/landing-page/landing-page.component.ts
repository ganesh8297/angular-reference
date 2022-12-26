import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  labelName: any;
  date: Date | undefined;
  bgColor: any = '#091952';
  constructor(private elementRef: ElementRef) { }
  // ngOnInit(): void {
  //   // this.date = new Date();
  //   this.countDown()
  //   setInterval(() => {
  //     // this.countDown()
  //   }, 1000);

  // }
  // selectedTabValue(event: any) {
  //   console.log(event);
  //   this.labelName = event.tab.textLabel;
  //   console.log(this.labelName)
  //   if (this.labelName == 'COUNDOWN') {
  //     // this.showDateTime()
  //   }
  // }
  // mins: any;
  // secs: any;
  // countDown() {
  //   let myDate = new Date("2023-02-08")
  //   let currDate = new Date()
  //   let year = currDate.getFullYear()
  //   let month = currDate.getMonth()
  //   let day = currDate.getDay()
  //   let hrs = currDate.getHours()
  //   this.mins = currDate.getMinutes()
  //   this.secs = currDate.getSeconds()
  //   console.log(myDate, 'myDate');
  //   console.log(currDate, 'currDate');
  //   console.log(month, 'month');
  //   console.log(day, 'day');
  //   console.log(hrs, 'hrs');
  //   console.log(this.mins, 'mins');
  //   console.log(this.secs, 'secs');
  //   console.log(year, 'year');
  // }


  ngOnInit() {
  }

  selectedTabValue(event: any) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
    if (this.labelName == 'COUNDOWN') {
      // this.showDateTime()
    }
  }
  ngAfterViewInit() {
    this.darkel = this.elementRef.nativeElement.querySelector('#btn-dark')
    this.lightkel = this.elementRef.nativeElement.querySelector('#btn-dark')
  }
  darkel: any;
  lightkel: any;
  mode: any = false
  cambiarTema(tema: any) {
    console.log(this.mode);
    this.mode = !this.mode

    switch (this.mode) {
      case true:
        document.documentElement.setAttribute('data-theme', 'dark');
        break;
      default:
        document.documentElement.setAttribute('data-theme', 'light');
        break;
    }
  }
}



