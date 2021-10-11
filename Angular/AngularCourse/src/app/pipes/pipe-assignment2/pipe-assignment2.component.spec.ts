import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssignment2Component } from './pipe-assignment2.component';

describe('PipeAssignment2Component', () => {
  let component: PipeAssignment2Component;
  let fixture: ComponentFixture<PipeAssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAssignment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
