import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {

    return new HttpParams().set( 'fields', 'name,capital,cca3,cca2,flags,population' )

  }

  constructor( private http: HttpClient ) { }

  searchCountry(input: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${input}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchCapital(input:string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${input}`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByCode(countryCode:string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${countryCode}`

    return this.http.get<Country>(url);
  }

  searchRegion (region: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
  }
}
