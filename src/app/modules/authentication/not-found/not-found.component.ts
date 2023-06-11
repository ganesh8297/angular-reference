import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLandingPage() {
    const utterThis = new SpeechSynthesisUtterance('please check the URL');
    speechSynthesis.speak(utterThis)
    this.router.navigate(['authentication/landingPage'])
  }
}
