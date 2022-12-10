import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
export class LoginComponent implements OnInit {
  labelName: any;

  constructor() { }

  ngOnInit(): void {
    this.labelName = 'LOGIN'

  }
  selectedTabValue(event: any) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName)
  }
}
