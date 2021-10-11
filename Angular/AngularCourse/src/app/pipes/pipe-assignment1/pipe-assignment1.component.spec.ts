import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssignment1Component } from './pipe-assignment1.component';

describe('PipeAssignment1Component', () => {
  let component: PipeAssignment1Component;
  let fixture: ComponentFixture<PipeAssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAssignment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
