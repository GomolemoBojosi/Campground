import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campground } from '../_models/campground';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CampgroundService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCampgrounds(): Observable<Campground[]> {
    var campgrounds = this.http.get<Campground[]>(this.baseUrl + 'Campground');
    return campgrounds;
  }

  getCampgroundById(id: number) {
    return this.http.get<Campground>(this.baseUrl + 'campground/' + id);
  }
}
