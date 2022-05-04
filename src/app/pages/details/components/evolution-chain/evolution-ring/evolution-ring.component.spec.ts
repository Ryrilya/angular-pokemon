import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionRingComponent } from './evolution-ring.component';

describe('EvolutionRingComponent', () => {
  let component: EvolutionRingComponent;
  let fixture: ComponentFixture<EvolutionRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionRingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
