import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemTokenComponent } from './redeem-token.component';

describe('RedeemTokenComponent', () => {
  let component: RedeemTokenComponent;
  let fixture: ComponentFixture<RedeemTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
