import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Country } from '../interface/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {
	@Input('cd')  countryDetail: Country;
	pageTitle = 'Country Detail';
	imageWidth = 50;
  imageMargin = 2;

  constructor() { }

  ngOnInit(): void {
  }



}
