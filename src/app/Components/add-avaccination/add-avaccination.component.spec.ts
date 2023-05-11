import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvaccinationComponent } from './add-avaccination.component';

describe('AddAvaccinationComponent', () => {
  let component: AddAvaccinationComponent;
  let fixture: ComponentFixture<AddAvaccinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAvaccinationComponent]
    });
    fixture = TestBed.createComponent(AddAvaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
