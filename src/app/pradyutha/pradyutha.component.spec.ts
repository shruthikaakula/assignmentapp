import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradyuthaComponent } from './pradyutha.component';

describe('PradyuthaComponent', () => {
  let component: PradyuthaComponent;
  let fixture: ComponentFixture<PradyuthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradyuthaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PradyuthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
