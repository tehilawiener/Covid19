import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCoronaDetailsComponent } from './get-all-corona-details.component';

describe('GetAllCoronaDetailsComponent', () => {
  let component: GetAllCoronaDetailsComponent;
  let fixture: ComponentFixture<GetAllCoronaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllCoronaDetailsComponent]
    });
    fixture = TestBed.createComponent(GetAllCoronaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
