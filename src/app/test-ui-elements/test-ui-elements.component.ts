import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-test-ui-elements',
  templateUrl: './test-ui-elements.component.html',
  styleUrls: ['./test-ui-elements.component.css']
})
export class TestUiElementsComponent implements OnInit {

  cities: SelectItem[];
  selectedCity: string;

  @ViewChild('myB') myB;

  constructor() {
    this.cities = [];
    this.cities.push({ label: 'New York', value: 1 });
    this.cities.push({ label: 'Rome', value: 2 });
    this.cities.push({ label: 'London', value: 3 });
    this.cities.push({ label: 'Istanbul', value: 4 });
    this.cities.push({ label: 'Paris', value: 5 });
  }

  ngOnInit() {
  }

  handleClick() {
    console.log('clicked');
    console.log(this.selectedCity !== undefined ? this.selectedCity : 'undefined');
  }

  dropdownSelectionChanged() {
    console.log('dropdownSelectionChanged');
  }

}
