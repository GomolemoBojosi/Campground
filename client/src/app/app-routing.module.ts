import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CampgroundsComponent } from './campgrounds/campground-list/campground-list.component';
import { CampgroundDetailsComponent } from './campgrounds/campground-details/campground-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campgrounds', component: CampgroundsComponent },
  { path: 'campgrounds/:id', component: CampgroundDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
