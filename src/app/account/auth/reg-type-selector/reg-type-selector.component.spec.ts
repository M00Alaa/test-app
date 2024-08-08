import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTypeSelectorComponent } from './reg-type-selector.component';

describe('RegTypeSelectorComponent', () => {
  let component: RegTypeSelectorComponent;
  let fixture: ComponentFixture<RegTypeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegTypeSelectorComponent]
    });
    fixture = TestBed.createComponent(RegTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
