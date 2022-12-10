import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  labelName: any;
  date: Date | undefined;

  constructor() { }
  ngOnInit(): void {
    this.date = new Date();

  }
  selectedTabValue(event: any) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
    if (this.labelName == 'COUNDOWN') {
      // this.showDateTime()
    }
  }



}
