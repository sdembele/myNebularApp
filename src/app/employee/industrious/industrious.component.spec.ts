import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriousComponent } from './industrious.component';

describe('IndustriousComponent', () => {
  let component: IndustriousComponent;
  let fixture: ComponentFixture<IndustriousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
