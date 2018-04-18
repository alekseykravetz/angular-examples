import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { FormValidationExamplesComponent } from './form-validation-examples/form-validation-examples.component';
import { FormsReactiveValidationExamplesComponent } from './forms-reactive-validation-examples/forms-reactive-validation-examples.component';


@NgModule({
  declarations: [
    AppComponent,
    FormExamplesComponent,
    BindingExamplesComponent,
    FormValidationExamplesComponent,
    FormsReactiveValidationExamplesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
