import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private http: HttpClient, private formbuilder: FormBuilder) {
    this.profileForm = formbuilder.group({
      firstName:['',Validators.required],
      email:['',Validators.required],
    })
  }

  ngOnInit(): void { }



  submit() {

  }
  profileForm: FormGroup;

  updateProfile() {
    this.http.get('https://gorest.co.in/public/v2/users').subscribe((data: any) => {
      console.log(data[0].name);

      this.profileForm.patchValue({
        firstName: data[0].name,
        email: data[0].email,

      });
    })

  }
  showFiller = false;
}
