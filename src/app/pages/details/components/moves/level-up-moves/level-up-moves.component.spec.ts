import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpMovesComponent } from './level-up-moves.component';

describe('LevelUpMovesComponent', () => {
  let component: LevelUpMovesComponent;
  let fixture: ComponentFixture<LevelUpMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelUpMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelUpMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
