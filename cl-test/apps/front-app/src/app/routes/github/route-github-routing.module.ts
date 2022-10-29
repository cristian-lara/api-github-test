import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RouteCommitsComponent} from "./route-commits/route-commits.component";

const routes: Routes = [
  {
    path: '',
    component: RouteCommitsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteGithubRoutingModule {}
