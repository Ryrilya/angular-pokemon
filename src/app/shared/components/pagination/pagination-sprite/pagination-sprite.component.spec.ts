import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSpriteComponent } from './pagination-sprite.component';

describe('PaginationSpriteComponent', () => {
  let component: PaginationSpriteComponent;
  let fixture: ComponentFixture<PaginationSpriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationSpriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
