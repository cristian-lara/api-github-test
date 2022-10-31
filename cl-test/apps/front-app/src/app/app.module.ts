import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './routes/home/home.component';
import { RouteCommitsComponent } from './routes/github/route-commits/route-commits.component';
import { TableCommitsComponent } from './components/table-commits/table-commits.component';
import {AppRoutingModule} from './app-routing.module';
import {RouteGithubModule} from "./routes/github/route-github.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    RouteCommitsComponent,
    TableCommitsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouteGithubModule, HttpClientModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
