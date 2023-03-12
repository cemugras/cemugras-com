import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakesPageComponent } from './earthquakes-page.component';

describe('EarthquakesPageComponent', () => {
  let component: EarthquakesPageComponent;
  let fixture: ComponentFixture<EarthquakesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthquakesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthquakesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
