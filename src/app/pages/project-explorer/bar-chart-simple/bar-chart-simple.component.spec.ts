import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartSimpleComponent } from './bar-chart-simple.component';

describe('LineChartComponent', () => {
  let component: BarChartSimpleComponent;
  let fixture: ComponentFixture<BarChartSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
