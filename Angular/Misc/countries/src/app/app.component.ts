import { Component } from '@angular/core';

import { Country } from './interface/country';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'countries';
  showCountryDetail = false;
  countryDetail: Country[] = [];

  onRegionSelect(event: User) {
    this.showCountryDetail = event.showCountryDetail;
    this.countryDetail = event.countryDetailData;
  }

}
