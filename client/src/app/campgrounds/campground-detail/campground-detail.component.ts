import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campground } from 'src/app/_models/campground';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css']
})
export class CampgroundDetailComponent implements OnInit {
  campground: Campground;

  constructor(private campgroundService: CampgroundService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCampground();
  }

  getCampground() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.campgroundService.getCampground(id).subscribe(result => {
      this.campground = result;
    });
  }
}
