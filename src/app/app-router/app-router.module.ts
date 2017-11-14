import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieReviewsComponent } from '../movie-reviews/movie-reviews.component';

const appRoutes: Routes = [
  { path: 'movie-list/:id', component: MovieListComponent },
  { path: 'movie-details/:title', component: MovieDetailsComponent },
  { path: 'movie-reviews/:title', component: MovieReviewsComponent },
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
