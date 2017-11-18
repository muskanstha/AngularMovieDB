import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { GetMovieService } from './getmovie.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import { AppRouterModule } from './app-router/app-router.module';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieReviewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GetMovieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
