import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import dummy from './dummy.json'
import { MessageService } from 'src/app/services/message.service';
import { commonAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [commonAnimation],
})
export class LandingPageComponent implements OnInit {
  labelName: any;
  date: Date | undefined;
  bgColor: any = '#e9185f';
  dummyList: any = dummy
  constructor(private elementRef: ElementRef, private messageService: MessageService) {
    this.messageService.getMessage().subscribe((res: any) => {
      console.log(res);
    });

    this.messageService.sendMessage('hello ganesh')

  }

  ngOnInit() {
    this.loderVisible = true;
  }

  loderVisible: boolean = true;
  loginVisible: boolean = true;
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

    setTimeout(() => {
      this.loderVisible = false
    }, 3000);

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


  findNoRepeatNo() {
    function findDuplicates(array: any) {
      var uniqueValues: any = []
      var duplicateValues: any = [];

      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (uniqueValues.includes(value)) {
          duplicateValues.push(value);
        } else {
          uniqueValues.push(value);
        }
      }

      return {
        unq: uniqueValues,
        dup: duplicateValues
      };
    }

    var array = [1, 2, 3, 2, 4, 1, 5, 3];
    var duplicates = findDuplicates(array);
    // console.log(duplicates.unq); // Output: [2, 1, 3]
    // console.log(duplicates.dup);
  }

  loginGetValue(val: any) {
    this.loginVisible = val;
  }

  signupGetValue(val: any) {
    this.loginVisible = val;
  }


}



