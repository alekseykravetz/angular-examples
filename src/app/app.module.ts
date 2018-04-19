import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem, SelectItem } from 'primeng/api';                 // api
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';


import { AppComponent } from './app.component';
import { TestUiElementsComponent } from './test-ui-elements/test-ui-elements.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { FormValidationExamplesComponent } from './form-validation-examples/form-validation-examples.component';
// tslint:disable-next-line:max-line-length
import { FormsReactiveValidationExamplesComponent } from './forms-reactive-validation-examples/forms-reactive-validation-examples.component';


@NgModule({
  declarations: [
    AppComponent,

    TestUiElementsComponent,

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

    ButtonModule,
    TooltipModule,
    AccordionModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
