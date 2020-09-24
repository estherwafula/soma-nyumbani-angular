import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TodaySessionsComponent } from './today-sessions/today-sessions.component';
import { AllSessionsComponent } from './all-sessions/all-sessions.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TodayComponent } from './today/today.component';
import { NextComponent } from './next/next.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TodaySessionsComponent,
    AllSessionsComponent,
      AboutComponent,
      TeamComponent,
      TodayComponent,
      NextComponent,
      MenuComponent
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
