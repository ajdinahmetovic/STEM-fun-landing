import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 5;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 5;
  }

  openNewWindow () {
    window.location.href = 'https://play.google.com/store/apps/details?id=space.stemfun.stemfun';
  }

  openITzene() {
    window.location.href = 'http://itgirls.ba/';
  }
    openAcademy(){
  window.location.href = 'http://www.academy387.com';
  }
}

