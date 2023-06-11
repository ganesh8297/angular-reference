import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { HttpService } from './services/http.service'
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutPaneAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), //apply default styles before animation starts
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'angular-reference';
  constructor(private messageService: MessageService, private http: HttpService) { }

  ngOnInit() {
    // this.getData()
    this.messageService.sendMessage('hello venkat')
    this.studentList = [
      {
        name: 'ganesh',
        age: 26
      },
      {
        name: 'Gp',
        age: 25
      },
      {
        name: 'venkat',
        age: 25
      }
    ]

    this.messageService.addStudent(this.studentList)

  }

  studentList: any = []

  getData() {
    this.http.get('/allStudent',).subscribe((res: any) => {
      console.log(res, 'stdList');

    })
  }

}
