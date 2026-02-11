import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Employee {
  employeeId: string;
  name: string;
  email: string;
  department: string;
  dateOfJoining: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://localhost:5038/api/Employee'; // replace with your .NET API URL

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
