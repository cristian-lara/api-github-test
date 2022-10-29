import { NgModule } from '@angular/core';
import { RouteGithubRoutingModule } from './route-github-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [RouteGithubRoutingModule, CommonModule],
  declarations: [HeaderMenuComponent],
  exports: [
    HeaderMenuComponent
  ]
})
export class RouteGithubModule {}
