import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CampgroundsComponent } from './campgrounds/campground-list/campground-list.component';
import { CampgroundDetailsComponent } from './campgrounds/campground-details/campground-details.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'campgrounds', component: CampgroundsComponent, canActivate: [AuthGuard] },
      { path: 'campgrounds/:id', component: CampgroundDetailsComponent },
    ]
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
