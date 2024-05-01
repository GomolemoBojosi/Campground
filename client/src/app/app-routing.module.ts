import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampgroundListComponent } from './campgrounds/campground-list/campground-list.component';
import { CampgroundDetailComponent } from './campgrounds/campground-detail/campground-detail.component';
import { AddCampgroundComponent } from './campgrounds/add-campground/add-campground.component';
import { EditCampgroundComponent } from './campgrounds/edit-campground/edit-campground.component';

const routes: Routes  = [
  {path: '', component: HomeComponent },
  {path: 'campgrounds', component: CampgroundListComponent},
  {path: 'campgrounds/:id', component: CampgroundDetailComponent },
  {path: 'add-campground', component: AddCampgroundComponent },
  {path: 'edit-campground/:id', component: EditCampgroundComponent}, 
  {path: '**', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
