import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctypeButtonComponent } from './acctype-button.component';

describe('AcctypeButtonComponent', () => {
  let component: AcctypeButtonComponent;
  let fixture: ComponentFixture<AcctypeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcctypeButtonComponent]
    });
    fixture = TestBed.createComponent(AcctypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
