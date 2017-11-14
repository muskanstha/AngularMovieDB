import { Component, OnInit } from '@angular/core';

import { Movie } from '../Shared/Movie';
import { GetMovieService } from '../getmovie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie: Movie;
  private movies: Movie[];
  safeUrl: SafeResourceUrl;


  constructor(private movieService: GetMovieService, private router: Router, private route: ActivatedRoute,
    private location: Location, private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    await this.movieService.getMovie(this.route.snapshot.params['title']).then(data => {
      data.subscribe(movie => {
        this.movie = movie;
        console.log(this.movie.trailer);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);

      });

    });

    // this.movie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.movie.poster_path;
    // this.movieService.getMovie(this.route.snapshot.params['title']).subscribe(response => this.movie = response[0]);
    // this.movie = this.movies[0];
  }
  public gotoMovies() {
    // this.router.navigate(['/movie-list/' + this.route.snapshot.params['title']]);
    this.location.back();
  }

}

