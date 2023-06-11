import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private messageService: MessageService, private router: Router) { }
  data: any = []
  stdList: any = []
  ngOnInit(): void {
    this.messageService.sendMessage('oiiiiiii')
    this.messageService.getMessage().subscribe((res: any) => {
      this.data = res['data']
      console.log(res);
    });
    let newStd = {
      name: 'sam',
      age: 25
    }
    this.messageService.getStudentList().subscribe((res: any) => {
      this.stdList = res.data;
      console.log(res, 'std');
    })

    let newData = this.stdList.concat(newStd)
    this.messageService.addStudent(newData)
  }


  navigateTo() {
    this.messageService.sendMessage('landing page')
    this.router.navigate(['authentication/landingPage'])
  }

  goToDash() {
    this.messageService.sendMessage('dashboard page')
    this.router.navigate(['admin/adminDashboard'])
  }

}
