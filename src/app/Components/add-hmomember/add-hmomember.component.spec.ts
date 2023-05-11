import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHMOmemberComponent } from './add-hmomember.component';

describe('AddHMOmemberComponent', () => {
  let component: AddHMOmemberComponent;
  let fixture: ComponentFixture<AddHMOmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHMOmemberComponent]
    });
    fixture = TestBed.createComponent(AddHMOmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
