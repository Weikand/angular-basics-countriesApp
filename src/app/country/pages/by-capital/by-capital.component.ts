import {Component} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  searchInput: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService:CountryService) { }

  search( searchInput: string) {
    this.isError = false;
    this.searchInput = searchInput;

    this.countryService.searchCapital(this.searchInput)
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
    this.countryService.searchCapital(this.searchInput)
      .subscribe((resp) => {
          this.countries =resp;
        }, () => {
          this.isError = true;
          this.countries = [];
        }
      )
  }

}
