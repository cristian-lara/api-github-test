import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GuestService} from '../../services/github/guest.service';

@Component({
  selector: 'cl-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nameGuest: string = 'afsdf';
  constructor(private readonly router: Router, private readonly guestService: GuestService) {}

  ngOnInit(): void {}

  goToGithub() {
    this.guestService.nameGuest = this.nameGuest;
    this.router.navigate(['/', 'github']);
  }
}
