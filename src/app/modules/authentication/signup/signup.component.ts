import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() valuechange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  navigateTologin() {
    this.valuechange.emit(true)
  }

}
