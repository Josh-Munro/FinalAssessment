import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBeneComponent } from './display-bene.component';

describe('DisplayBeneComponent', () => {
  let component: DisplayBeneComponent;
  let fixture: ComponentFixture<DisplayBeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
