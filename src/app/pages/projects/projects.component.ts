import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Array<Object> = [
    {
      source: 'assets/photo/weatherApp.png',
      title: 'weatherApp',
      githubLink: 'https://github.com/zazulec/Weather-react-app',
      liLink: 'https://zazulec.github.io/Weather-react-app/#/',
    },
    {
      source: 'assets/photo/landingPageH.png',
      title: 'landingPageH',
      githubLink: 'https://github.com/zazulec/LandingPage_H',
      liLink: 'https://zazulec.github.io/LandingPage_H/',
    },
    {
      source: 'assets/photo/gowShop.png',
      title: 'gowShop',
      githubLink: 'https://github.com/zazulec/gwo-shop',
    },
    {
      source: 'assets/photo/calendar.png',
      title: 'calendar',
      githubLink: 'https://github.com/zazulec/calendar',
    },
    {
      source: 'assets/photo/oldPortfolio.png',
      title: 'oldPortfolio',
      githubLink: 'https://github.com/zazulec/Pawel-Zarzycki',
      liLink: 'https://zazulec.github.io/Pawel-Zarzycki/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  changeVisible = () => alert('hover');
}
