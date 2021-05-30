import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaliniComponent } from './shalini.component';

describe('ShaliniComponent', () => {
  let component: ShaliniComponent;
  let fixture: ComponentFixture<ShaliniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaliniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaliniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
