import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  addCampgroundMode = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleAddForm() {
    this.addCampgroundMode = !this.addCampgroundMode;
  }
}
