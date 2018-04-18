import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactiveValidationExamplesComponent } from './forms-reactive-validation-examples.component';

describe('FormsReactiveValidationExamplesComponent', () => {
  let component: FormsReactiveValidationExamplesComponent;
  let fixture: ComponentFixture<FormsReactiveValidationExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsReactiveValidationExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveValidationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
