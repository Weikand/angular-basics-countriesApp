import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }

    `
  ]
})
export class ByRegionComponent{

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  isError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService) { }

  getButtonCssClass(region:string ) {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion( region:string ){
    if(region !== this.activeRegion) {
      this.activeRegion = region;
      this.countries = [];

      this.countryService.searchRegion(this.activeRegion)
        .subscribe(countries => {
          this.countries = countries;
        }, () => {
          this.isError = true;
          this.countries = [];
        });
    }
  }

}
