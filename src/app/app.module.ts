import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { UsersComponent } from './users/users.component';
import { ChangesComponent } from './changes/changes.component';
import {MatGridListModule} from '@angular/material';
import { PlanetsComponent } from './planets/planets.component';
import { TeamComponent } from './team/team.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ChangesComponent,
    PlanetsComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    MatGridListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
