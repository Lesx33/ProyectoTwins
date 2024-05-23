import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    const apiKey = '4206e2c23eb6c0be729b2990e51a3aa2'; // Replace with your TMDb API key
    const baseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/popular';

    const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;

    return this.http.get(url)
      .pipe(
        map((data: any) => data.results)
      );
  }
  getPopularTV() {
    const apiKey = '4206e2c23eb6c0be729b2990e51a3aa2'; // Replace with your TMDb API key
    const baseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/discover/tv';

    const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;

    return this.http.get(url)
      .pipe(
        map((data: any) => data.results)
      );
  }
}
