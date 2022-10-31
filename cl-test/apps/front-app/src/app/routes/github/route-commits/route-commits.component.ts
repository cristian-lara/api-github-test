import { Component, OnInit } from '@angular/core';
import {takeUntil, UnsubscriptionError} from 'rxjs';
import {autoUnsubscribeMixin} from '../../../utils/unsubscribe.class';
import {GithubService} from '../../../services/github/github.service';
import {GithubCommitsInterface} from '@cl-test/github';

@Component({
  selector: 'cl-test-route-commits',
  templateUrl: './route-commits.component.html',
  styleUrls: ['./route-commits.component.scss'],
})
export class RouteCommitsComponent extends autoUnsubscribeMixin() implements OnInit {
  commitsHistory!: GithubCommitsInterface[];
  data!: { total: number; data: GithubCommitsInterface[] };
  constructor(private readonly githubService: GithubService) {
    super()
  }

  ngOnInit(): void {
    this.getHistoryCommits();
  }

  getHistoryCommits(): void {
    this.githubService
      .getCommitsHistory()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(response => this.data = response);
  }
}
