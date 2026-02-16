
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:5038/api/Employee';
  private dashboardUrl = `${this.apiUrl}/dashboard`; // separate endpoint for dashboard

  constructor(private http: HttpClient) {}

  // Fetch all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  //Fetch the current user's profile

getMyProfile(): Observable<Employee> {
  const token = localStorage.getItem('Token');

  return this.http.get<Employee>(
    `${this.apiUrl}/myprofile`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
//   // Update an employee
  updateEmployee(emp: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/${emp.employeeId}`, emp);
  }

  // Delete an employee
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Get dashboard data with authorization header
  getDashboardData(): Observable<any> {
    const token = localStorage.getItem('Token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(this.dashboardUrl, { headers });
  }
}
