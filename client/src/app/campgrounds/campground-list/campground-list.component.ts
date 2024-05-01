import { Component, OnInit } from '@angular/core';
import { Campground } from 'src/app/_models/campground';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-campground-list',
  templateUrl: './campground-list.component.html',
  styleUrls: ['./campground-list.component.css']
})
export class CampgroundListComponent implements OnInit {
  campgrounds: Campground[];

  constructor(private campgroundService: CampgroundService) { }

  ngOnInit(): void {
    this.getCampgrounds();
  }

  getCampgrounds() {
    this.campgroundService.getCampgrounds().subscribe(result => {
      this.campgrounds = result;
    });
  }

}
