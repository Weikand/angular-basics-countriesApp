import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry(input: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${input}`

    return this.http.get<Country[]>(url);
  }

  searchCapital(input:string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${input}`

    return this.http.get<Country[]>(url);
  }

  getCountryByCode(countryCode:string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${countryCode}`

    return this.http.get<Country>(url);
  }

}
