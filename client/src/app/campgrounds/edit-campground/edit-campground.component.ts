import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Campground } from 'src/app/_models/campground';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-edit-campground',
  templateUrl: './edit-campground.component.html',
  styleUrls: ['./edit-campground.component.css']
})
export class EditCampgroundComponent implements OnInit {
  campground: Campground;
  campgroundId: number;

  constructor(private campgroundService: CampgroundService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.campgroundId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCampground();
  }

  getCampground() {
    const id =
      this.campgroundService.getCampground(this.campgroundId).subscribe(result => {
        this.campground = result;
      });
  }

  updateCampground() {
    this.campgroundService.updateCampground(this.campground.id, this.campground).subscribe(result => {
      this.router.navigateByUrl(`campgrounds/${this.campgroundId}`);
      this.toastr.success('Campground updated successfully');
    }, error => {
      this.toastr.error('There was a problem updating campground');
    });
  }

  save() {
    this.updateCampground();
  }
}
