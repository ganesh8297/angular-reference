import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { commonAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [commonAnimation],


})
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
export class LoginComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  labelName: any;
  tickVisible: boolean = false;
  accType: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.labelName = 'LOGIN'

  }
  selectedTabValue(event: any) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
  }


  selectAccount(type: any) {
    this.tickVisible = true;
    this.accType = type;
  }

  register() {
    this.valueChange.emit(false)
  }
}
