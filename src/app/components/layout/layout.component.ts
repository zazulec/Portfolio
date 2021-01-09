import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public activeView: string = "home";

  constructor() {}

  ngOnInit(): void {

  }

  changeView = (view: string): void => {
    this.activeView = view
  }

}