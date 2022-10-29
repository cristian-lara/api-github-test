import {NgModule} from "@angular/core";
import {RouteGithubRoutingModule} from "./route-github-routing.module";
import {CommonModule} from "@angular/common";


@NgModule(
  {
imports: [RouteGithubRoutingModule,CommonModule]
  }
)
export class RouteGithubModule {}
