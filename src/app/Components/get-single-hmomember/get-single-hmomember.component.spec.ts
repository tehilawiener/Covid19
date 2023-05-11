import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleHMOmemberComponent } from './get-single-hmomember.component';

describe('GetSingleHMOmemberComponent', () => {
  let component: GetSingleHMOmemberComponent;
  let fixture: ComponentFixture<GetSingleHMOmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSingleHMOmemberComponent]
    });
    fixture = TestBed.createComponent(GetSingleHMOmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
