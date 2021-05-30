import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcoalComponent } from './charcoal.component';

describe('CharcoalComponent', () => {
  let component: CharcoalComponent;
  let fixture: ComponentFixture<CharcoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharcoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
