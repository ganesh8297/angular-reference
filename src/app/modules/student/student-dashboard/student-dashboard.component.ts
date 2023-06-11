import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((res: any) => {
      console.log(res);
    });
  }
  ngAfterViewInit(){
    console.log('k');
    this.messageService.getMessage().subscribe((res: any) => {
      console.log(res);
    });
  }

}
