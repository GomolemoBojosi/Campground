import { Component, OnInit } from '@angular/core';
import { Campground } from 'src/app/_models/campground';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campground-list.component.html',
  styleUrls: ['./campground-list.component.css'],
})
export class CampgroundsComponent implements OnInit {
  campgrounds: Campground[];
  constructor(private campgroundService: CampgroundService) { }

  ngOnInit(): void {
    this.getCampgrounds();
  };

  getCampgrounds() {
    this.campgroundService.getCampgrounds().subscribe((response) => {
      this.campgrounds = response;
      console.log(response);
    });
  };
}
