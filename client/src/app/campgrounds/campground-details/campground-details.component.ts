import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campground } from 'src/app/_models/campground';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-campground-details',
  templateUrl: './campground-details.component.html',
  styleUrls: ['./campground-details.component.css'],
})
export class CampgroundDetailsComponent implements OnInit {
  campground: Campground;

  constructor(
    private campgroundService: CampgroundService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCampground();
  }

  getCampground() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.campgroundService.getCampgroundById(id).subscribe({
      next: (response) => {
        this.campground = response;
      },
    });
  }
}
