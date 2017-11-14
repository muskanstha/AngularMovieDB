

import { Injectable, OnInit } from '@angular/core';


import { Movie } from './Shared/Movie';

import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

interface GetMoviesData { results: Movie[]; }
interface GetTrailerData { key: string; }
interface GetTrailerList { results: GetTrailerData[]; }

@Injectable()
export class GetMovieService {

  private theLink: string;
  private trailerList: GetTrailerData[];

  private aMovie: Movie;

  constructor(private httpc: HttpClient, private http: Http) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: GetMoviesData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average,
          };
        });
      });
  }
  public getTopMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: GetMoviesData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average,
          };
        });
      });
  }
  public getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: GetMoviesData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average,
          };
        });
      });
  }

  public getPlayingMovies(): Observable<Movie[]> {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US&page=1')
      .map(response => {
        const data: GetMoviesData = response.json();
        return data.results.map(movie => {
          return <Movie>{
            'id': movie.id,
            'title': movie.title,
            'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
            'overview': movie.overview,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average
          };
        });
      });
  }

  public async getMovie(id: string): Promise<Observable<Movie>> {
    await this.getTrailer(id);
    return await this.http.get('https://api.themoviedb.org/3/movie/'
      + id + '?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
      .map(response => {
        const movie: Movie = response.json();
        return <Movie>{
          'id': movie.id,
          'title': movie.title,
          'poster_path': 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path,
          'overview': movie.overview,
          'release_date': movie.release_date,
          'vote_average': movie.vote_average,
          'trailer': this.getTrailer(id)
        };
      });
    // this.movieService.getPlayingMovies().subscribe(data => {
    //   this.movies = data;
    // });
  }

  public getTrailer(movieId: string): string {
    this.http.get('https://api.themoviedb.org/3/movie/'
      + movieId + '/videos?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
      .map(response => {
        const trailerList: GetTrailerList = response.json();
        return trailerList.results.map(trailer => {
          return <GetTrailerData>{
            'key': 'https://www.youtube.com/embed/' + trailer.key
          };
        });
      }).subscribe(data => this.theLink = data[0].key);
    console.log(this.theLink);
    return this.theLink;
  }

  // this.getTrailer(movie.id).subscribe(data => {
  //   this.trailerList = data;
  // });
  // public getTrailer(movieId: number) {
  //   this.httpc.get<string>('https://api.themoviedb.org/3/movie/'
  //     + movieId + '/videos?api_key=e7990444d96dae7ef10b8ce4477f8388&language=en-US')
  //     .subscribe(data => {
  //       const links: GetTrailerData[] = data['results'];
  //       this.theLink = links[0].key;
  //     });
  // }

  // public getMovieList(): Movie[] {
  //   return this.movies;
  // }
  // public getMovie(title: string): Movie {
  //   this.foundMovie = this.movies.find(movie => movie.title === title);
  //   this.foundMovie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.foundMovie.poster_path;
  //   return this.foundMovie;
  // }


  // this.movie.fullposter_path = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.movie.poster_path;
  // this.movieService.getMovie(this.route.snapshot.params['title']).subscribe(response => this.movie = response[0]);
  // this.movie = this.movies[0];
}
