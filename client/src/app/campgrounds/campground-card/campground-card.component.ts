import { Component, Input, OnInit } from '@angular/core';
import { Campground } from 'src/app/_models/campground';

@Component({
  selector: 'app-campground-card',
  templateUrl: './campground-card.component.html',
  styleUrls: ['./campground-card.component.css']
})
export class CampgroundCardComponent implements OnInit {
  @Input() campground: Campground;

  constructor() { }

  ngOnInit(): void {
  }

}
