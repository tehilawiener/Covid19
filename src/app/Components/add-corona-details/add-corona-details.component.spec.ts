import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoronaDetailsComponent } from './add-corona-details.component';

describe('AddCoronaDetailsComponent', () => {
  let component: AddCoronaDetailsComponent;
  let fixture: ComponentFixture<AddCoronaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoronaDetailsComponent]
    });
    fixture = TestBed.createComponent(AddCoronaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
