import { Routes } from '@angular/router';
import { EmployeeloginComponent } from './employeelogin-component/employeelogin-component';
import { EmployeesignupComponent } from './employeesignup-component/employeesignup-component';
import { EmployeedashboardComponent } from './employeedashboard-component/employeedashboard-component';
import { AdminLoginComponent } from './admin-login-component/admin-login-component';

export const routes: Routes = [
{
  path:'employeelogin',
  component:EmployeeloginComponent
},
{
  path:'employeeSignup',
  component:EmployeesignupComponent
},
{
  path:'employeeDashboard',
  component:EmployeedashboardComponent
},
{
path:'**',
component:AdminLoginComponent
}
];
