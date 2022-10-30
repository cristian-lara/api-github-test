import {Component, Input, OnInit} from '@angular/core';
import {GithubCommitsInterface} from '@cl-test/github';

@Component({
  selector: 'cl-test-table-commits',
  templateUrl: './table-commits.component.html',
  styleUrls: ['./table-commits.component.scss'],
})
export class TableCommitsComponent implements OnInit {
  @Input() commitsHistory!: GithubCommitsInterface[];
  headers: string [] = [
    'Author',
    'Email',
    'Message',
    'Committer'
  ]
  constructor() {}

  ngOnInit(): void {}

  filter() {
    console.log('total', this.commitsHistory.length)
    return this.commitsHistory.slice(0,10);
  }
}
