import { Component, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  subscription: Subscription | undefined;
  constructor(private el: ElementRef, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.data = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', test: 'kkj', action: false },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', test: '896766', action: false },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: false },
      { position: 4, name: 'Lithium', weight: 6.941, symbol: 'Li', action: false },
      { position: 5, name: 'Lithium', weight: 6.941, symbol: 'Li', action: false },
      { position: 6, name: 'Lithium', weight: 6.941, symbol: 'Li', action: false },

    ];
    this.columnNames = Object.keys(this.data[0]);
    this.messageService.sendMessage('hello')

    setTimeout(() => {
      this.subscription = this.messageService.getMessage().subscribe((res: any) => {
        this.res = res
        console.log(res);
      });
    }, 1000)

    this.messageService.getStudentList().subscribe((res: any) => {
      this.stdList = res.data;
      console.log(res, 'std');
    })
  }
  res: any = []
  data: any = [];
  columnNames: any;
  stdList: any = []

  capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  editable(data: any, event: any) {
    // document.getElementById(data)!.style.backgroundColor = 'red';
    this.data.map((el: any) => el.position == data ? el.action = true : el.action = false)

  }


  navigateTo() {
    this.router.navigate(['admin/adminProfile'])
  }

}
