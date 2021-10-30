import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor:pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  searchInput: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService:CountryService) { }

  search( searchInput: string) {
    this.showSuggestions = false;
    this.isError = false;
    this.searchInput = searchInput;
    if(searchInput !== '') {
      this.countryService.searchCountry(this.searchInput)
        .subscribe((resp) => {
          this.countries = resp;
        }, () => {
          this.isError = true;
          this.countries = [];
        });
    } else {
      this.countries = [];
    }
  }

  suggestions(value: string) {
    this.isError = false;
    this.searchInput = value;
    this.showSuggestions = true;
    if (this.searchInput !== '') {
      this.countryService.searchCountry(this.searchInput)
        .subscribe((resp) => {
            this.suggestedCountries = resp.splice(0,5);
          }, () => {
            this.isError = true;
            this.suggestedCountries = [];
          }
        )
    } else {
      this.suggestedCountries = [];
    }
  }

  searchSuggested (searchInput: string) {
    this.search(searchInput);
  }

}
