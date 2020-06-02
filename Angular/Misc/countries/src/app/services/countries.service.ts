import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Country } from '../interface/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
	private asiaRegionUrl = 'https://restcountries.eu/rest/v2/region/asia';
	private europeRegionUrl = 'https://restcountries.eu/rest/v2/region/europe';

  constructor(private http: HttpClient) { }

  getCountries(type: string): Observable<Country[]> {
  	let outputUrl = type === 'Asia' ? this.asiaRegionUrl : this.europeRegionUrl;
    return this.http.get<Country[]>(outputUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
