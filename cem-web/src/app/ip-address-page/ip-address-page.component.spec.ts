import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressPageComponent } from './ip-address-page.component';

describe('IpAddressPageComponent', () => {
  let component: IpAddressPageComponent;
  let fixture: ComponentFixture<IpAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAddressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
