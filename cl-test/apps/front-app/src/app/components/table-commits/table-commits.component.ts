import {Component, Input, OnInit} from '@angular/core';
import {GithubCommitsInterface} from '@cl-test/github';
import {autoUnsubscribeMixin} from '../../utils/unsubscribe.class';
import {GithubService} from '../../services/github/github.service';
import {takeUntil} from 'rxjs';

@Component({
  selector: 'cl-test-table-commits',
  templateUrl: './table-commits.component.html',
  styleUrls: ['./table-commits.component.scss'],
})
export class TableCommitsComponent extends autoUnsubscribeMixin()implements OnInit {
  @Input() commitsHistory!: GithubCommitsInterface[];
  @Input() total!: number;
  headers: string [] = [
    'Author',
    'Email',
    'Message',
    'Committer'
  ]
  totalPages!: number[];

  constructor(private readonly githubService: GithubService) {
    super()
  }

  ngOnInit(): void {
    this.totalPages = Array.from(Array(this.total % 10).keys()).map(r => r + 1);
  }

  filter(index: number) {
    this.githubService.getCommitsHistory(index + 1)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        r => this.commitsHistory = r.data
      )
  }
}
