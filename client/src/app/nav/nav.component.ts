import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  addCampgroundMode = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(result => {
    }, error => {
      console.log(error);
    });
  };

  logout() {
    this.accountService.logout();
  }

  toggleAddForm() {
    this.addCampgroundMode = !this.addCampgroundMode;
  }
}
