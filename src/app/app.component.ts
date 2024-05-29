import { Component, OnInit, Injectable } from '@angular/core';
import { TmdbService } from '../data.services';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProyectoTwins';
  popularMovies: any[] = [];
  popularTVShows: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies()
      .subscribe(movies => {
        this.popularMovies = movies;
      });

    this.tmdbService.getPopularTV()
      .subscribe(tvShows => {
        this.popularTVShows = tvShows;
      });
    console.log(this.popularMovies);
    console.log(this.popularTVShows);
  }
}
