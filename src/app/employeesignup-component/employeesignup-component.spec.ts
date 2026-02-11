import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesignupComponent } from './employeesignup-component';

describe('EmployeesignupComponent', () => {
  let component: EmployeesignupComponent;
  let fixture: ComponentFixture<EmployeesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesignupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
