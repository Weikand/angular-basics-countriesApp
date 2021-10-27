import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ByCountryComponent} from "./app/country/pages/by-country/by-country.component";
import {ByRegionComponent} from "./app/country/pages/by-region/by-region.component";
import {ByCapitalComponent} from "./app/country/pages/by-capital/by-capital.component";
import {SeeCountryComponent} from "./app/country/pages/see-country/see-country.component";


const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'country/:countryCode',
    component: SeeCountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
