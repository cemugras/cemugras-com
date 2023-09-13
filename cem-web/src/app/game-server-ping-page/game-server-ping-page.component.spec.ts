import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameServerPingPageComponent } from './game-server-ping-page.component';

describe('GameServerPingPageComponent', () => {
  let component: GameServerPingPageComponent;
  let fixture: ComponentFixture<GameServerPingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameServerPingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameServerPingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
