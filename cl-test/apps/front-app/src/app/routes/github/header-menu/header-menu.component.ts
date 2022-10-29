import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'cl-test-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  @Input() routeName?: string;
  constructor(private location: Location) {}

  back(): void {
    this.location.back()
  }

  ngOnInit(): void {}
}
