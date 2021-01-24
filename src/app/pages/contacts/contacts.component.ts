import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  textValue: string = 'pawelzarzyckimail@gmail.com';
  phoneValue: string = '(+48) 785-909-387';
  isVisibleCoppyMailText: boolean = false;
  isVisibleCoppyPhoneText: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleVisibleCoppyText = (text: string) => {
    switch (text) {
      case 'mail':
        this.isVisibleCoppyMailText = true;
        setTimeout(() => {
          this.isVisibleCoppyMailText = false;
        }, 1300);
        break;
      case 'phone':
        this.isVisibleCoppyPhoneText = true;
        setTimeout(() => {
          this.isVisibleCoppyPhoneText = false;
        }, 1300);
        break;
      default:
        break;
    }
  };
}
