import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneListComponent } from './bene-list.component';

describe('BeneListComponent', () => {
  let component: BeneListComponent;
  let fixture: ComponentFixture<BeneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
