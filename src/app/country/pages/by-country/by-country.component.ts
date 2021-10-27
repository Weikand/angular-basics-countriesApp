import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  searchInput: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService:CountryService) { }

  search( searchInput: string) {
    this.isError = false;
    this.searchInput = searchInput;

    this.countryService.searchCountry(this.searchInput)
      .subscribe( (resp) => {
        this.countries = resp;
      }, () => {
        this.isError = true;
        this.countries = [];
      });
  }

  suggestions(value: string) {
    this.isError = false;
    this.searchInput = value;
    this.countryService.searchCountry(this.searchInput)
      .subscribe((resp) => {
        this.countries =resp;
      }, () => {
        this.isError = true;
        this.countries = [];
        }
      )
  }
}
