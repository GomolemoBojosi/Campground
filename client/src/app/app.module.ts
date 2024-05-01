import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CampgroundListComponent } from './campgrounds/campground-list/campground-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CampgroundDetailComponent } from './campgrounds/campground-detail/campground-detail.component';
import { AddCampgroundComponent } from './campgrounds/add-campground/add-campground.component';
import { EditCampgroundComponent } from './campgrounds/edit-campground/edit-campground.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CampgroundListComponent,
    HomeComponent,
    CampgroundDetailComponent,
    AddCampgroundComponent,
    EditCampgroundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
