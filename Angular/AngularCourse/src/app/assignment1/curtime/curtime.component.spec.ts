import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtimeComponent } from './curtime.component';

describe('CurtimeComponent', () => {
  let component: CurtimeComponent;
  let fixture: ComponentFixture<CurtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
