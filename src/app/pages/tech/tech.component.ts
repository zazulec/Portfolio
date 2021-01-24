import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
  animations: [
    // animation triggers go here
  ],
})
export class TechComponent implements OnInit {
  @Input() techLogoData: Array<Object> = [
    { img: '../../../assets/logo/javaSctiptLogo.svg', title: 'JavaScript' },
    { img: '../../../assets/logo/typeScriptLogo.png', title: 'TypeScript' },
    { img: '../../../assets/logo/reactLogo.webp', title: 'React' },
    { img: '../../../assets/logo/reduxLogo.png', title: 'Redux' },
    { img: '../../../assets/logo/angularLogo.png', title: 'Angular' },
    { img: '../../../assets/logo/bootstrapLogo.png', title: 'Bootstrap' },
    { img: '../../../assets/logo/materialUiLogo.png', title: 'Material-Ui' },
    {
      img: '../../../assets/logo/styledComponentsLogo.png',
      title: 'Styled',
    },
    { img: '../../../assets/logo/githubLogo.png', title: 'Github' },
    { img: '../../../assets/logo/adobeXdLogo.png', title: 'adobeXD' },
    { img: '../../../assets/logo/figmaLogo.png', title: 'Figma' },
    { img: '../../../assets/logo/postmanLogo.png', title: 'Postman' },
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
