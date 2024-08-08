import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemChooserComponent } from './system-chooser.component';

describe('SystemChooserComponent', () => {
  let component: SystemChooserComponent;
  let fixture: ComponentFixture<SystemChooserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemChooserComponent]
    });
    fixture = TestBed.createComponent(SystemChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
