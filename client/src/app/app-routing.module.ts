import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampgroundListComponent } from './campgrounds/campground-list/campground-list.component';
import { CampgroundDetailComponent } from './campgrounds/campground-detail/campground-detail.component';
import { AddCampgroundComponent } from './campgrounds/add-campground/add-campground.component';
import { EditCampgroundComponent } from './campgrounds/edit-campground/edit-campground.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'campgrounds', component: CampgroundListComponent, canActivate: [AuthGuard] },
      { path: 'campgrounds/:id', component: CampgroundDetailComponent },
      { path: 'add-campground', component: AddCampgroundComponent },
      { path: 'edit-campground/:id', component: EditCampgroundComponent },
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
