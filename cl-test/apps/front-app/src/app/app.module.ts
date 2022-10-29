import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './routes/home/home.component';
import { RouteCommitsComponent } from './routes/route-commits/route-commits.component';
import { TableCommitsComponent } from './components/table-commits/table-commits.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    RouteCommitsComponent,
    TableCommitsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
