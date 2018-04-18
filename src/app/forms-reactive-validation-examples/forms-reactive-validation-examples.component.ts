import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive-validation-examples',
  templateUrl: './forms-reactive-validation-examples.component.html',
  styleUrls: ['./forms-reactive-validation-examples.component.css']
})
export class FormsReactiveValidationExamplesComponent implements OnInit {

  public message = '';

  public formGroup = new FormGroup({
    messageControl: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

}
