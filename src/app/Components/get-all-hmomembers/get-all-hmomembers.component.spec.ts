import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllHMOmembersComponent } from './get-all-hmomembers.component';

describe('GetAllHMOmembersComponent', () => {
  let component: GetAllHMOmembersComponent;
  let fixture: ComponentFixture<GetAllHMOmembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllHMOmembersComponent]
    });
    fixture = TestBed.createComponent(GetAllHMOmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
