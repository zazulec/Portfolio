import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  mobile!: boolean;
  constructor() {}

  checkWindowWidth = () => {
    this.mobile = true;
  };

  ngOnInit() {
    this.checkWindowWidth = () => {
      if (window.screen.width < 800) {
        return (this.mobile = false);
      } else {
        return (this.mobile = true);
      }
    };
    this.checkWindowWidth();
    window.onresize = this.checkWindowWidth;
  }
}
