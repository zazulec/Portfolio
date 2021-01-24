import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TechComponent } from './pages/tech/tech.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { LayoutService } from './services/LayoutServce';
import { ProjectCardComponent } from './components/projectCard/project-card.component';
import { TechLogo } from './components/techLogo/tech-logo.component.';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TechComponent,
    ContactsComponent,
    ProjectsComponent,
    HomePageComponent,
    ProjectCardComponent,
    TechLogo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ClipboardModule,
  ],
  providers: [LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
