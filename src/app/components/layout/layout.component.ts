import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/LayoutServce';
import { LayoutViewTypes } from './LayoutViewTypes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layoutViewTypes = LayoutViewTypes;
  

  constructor(private layoutService: LayoutService) {
  
  }
  
  ngOnInit(): void {
  }

  changeView(view: LayoutViewTypes): void {
    this.layoutService.setView(view)
  }
  getActiveView = () => this.layoutService.getView()

}