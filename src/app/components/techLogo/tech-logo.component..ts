import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-logo',
  templateUrl: 'tech-logo.component.html',
  styleUrls: ['./tech-logo.component.scss'],
})
export class TechLogo implements OnInit {
  @Input() techLogoData!: Array<Object>;
  @Input() logo!: any;

  constructor() {}

  ngOnInit() {}
}
