import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionLineComponent } from './evolution-line.component';

describe('EvolutionLineComponent', () => {
  let component: EvolutionLineComponent;
  let fixture: ComponentFixture<EvolutionLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
