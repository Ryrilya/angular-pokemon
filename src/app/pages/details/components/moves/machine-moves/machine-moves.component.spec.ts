import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineMovesComponent } from './machine-moves.component';

describe('MachineMovesComponent', () => {
  let component: MachineMovesComponent;
  let fixture: ComponentFixture<MachineMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
