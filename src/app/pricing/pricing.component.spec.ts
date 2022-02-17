import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent as assistantComponent } from './pricing.component';

describe('PricingComponent', () => {
  let component: assistantComponent;
  let fixture: ComponentFixture<assistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [assistantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(assistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
