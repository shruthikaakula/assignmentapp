import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HariniComponent } from './harini.component';

describe('HariniComponent', () => {
  let component: HariniComponent;
  let fixture: ComponentFixture<HariniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HariniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HariniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
