import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../getmovie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Review } from '../Shared/Review';


@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {

  // private movieID: string;
  private reviews: Review[];

  constructor(private movieService: GetMovieService, private router: Router, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

    this.movieService.getReview(this.route.snapshot.params['title']).subscribe(data => {
      this.reviews = data;
    });
  }
  public gotoMovieDetails() {
    this.router.navigate(['/movie-details', this.route.snapshot.params['title']]);
  }
}
