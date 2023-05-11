import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleCoronaDetailsComponent } from './get-single-corona-details.component';

describe('GetSingleCoronaDetailsComponent', () => {
  let component: GetSingleCoronaDetailsComponent;
  let fixture: ComponentFixture<GetSingleCoronaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSingleCoronaDetailsComponent]
    });
    fixture = TestBed.createComponent(GetSingleCoronaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
