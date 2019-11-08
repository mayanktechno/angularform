import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormingComponent } from './forming.component';

describe('FormingComponent', () => {
  let component: FormingComponent;
  let fixture: ComponentFixture<FormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
