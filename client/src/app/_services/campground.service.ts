import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campground } from '../_models/campground';

@Injectable({
  providedIn: 'root'
})
export class CampgroundService {
  baseUrl = 'https://localhost:7139/api/';

  constructor(private http: HttpClient) { }

  getCampgrounds() {
    return this.http.get<Campground[]>(this.baseUrl + 'campgrounds');
  }

  getCampground(id: number) {
    return this.http.get<Campground>(`${this.baseUrl}campgrounds/${id}`);
  }

  updateCampground(id: number, campground: Campground) {
    return this.http.put(`${this.baseUrl}campgrounds/${id}`, campground);
  }
}
