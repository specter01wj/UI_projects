import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Country } from '../interface/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-regiions',
  templateUrl: './regiions.component.html',
  styleUrls: ['./regiions.component.less']
})
export class RegiionsComponent implements OnInit {
	@Output('rs') regionSelect = new EventEmitter<Object>();
	regions: string[] = ['Asia', 'Europe'];
	isCountryList = false;
	showCountryDetail = false;
	errorMessage = '';
	filteredCountry: Country[] = [];
	countryDetailData: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  getCountryList(type: string) {
  	this.filteredCountry = [];
  	this.countriesService.getCountries(type).subscribe({
      next: countries => {
        countries.map((country: Country) => {
        	this.filteredCountry.push(
        		{
        			name: country.name, capital: country.capital, 
        			population: country.population, currencies: country.currencies,
        			flag: country.flag});
        });
      },
      error: err => this.errorMessage = err
    });
  }

  filterRegions(filterVal: string) {
  	if (filterVal == "0") {
      this.isCountryList = false;
    } else {
    	this.isCountryList = true;
      this.getCountryList(filterVal);
    }
  }

  filterCountry(filterVal: string) {
  	if (filterVal == "0") {
      this.showCountryDetail = false;
    } else {
    	this.showCountryDetail = true;
      let countryDetailData = this.countryDetailFilter(filterVal);
      this.emitChanges(this.showCountryDetail, countryDetailData);
    }
  }

  countryDetailFilter(filterBy: string): Country[] {
    let value = filterBy.toLocaleLowerCase();
    return this.filteredCountry.filter((product: Country) =>
      product.name.toLocaleLowerCase().indexOf(value) !== -1);
  }

  emitChanges(showCountryDetail: boolean, countryDetailData: Country[]) {
    this.regionSelect.emit({showCountryDetail, countryDetailData});
  }

}
