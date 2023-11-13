import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CampgroundService } from 'src/app/_services/campground.service';

@Component({
  selector: 'app-add-campground',
  templateUrl: './add-campground.component.html',
  styleUrls: ['./add-campground.component.css']
})
export class AddCampgroundComponent implements OnInit {
  model: any = {};

  constructor(private campgroundService: CampgroundService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addCampground() {
    this.campgroundService.createCampground(this.model).subscribe(response => {
      this.toastr.success("Campground created successfully");
      this.router.navigateByUrl(`/campgrounds/${response.id}`)
    }, error => {
      this.toastr.error("error creating campground");
    });
  };

}
