import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5038/api/Employee/dashboard'; // Adjust to your actual endpoint

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    // 1. Grab the token using the exact key 'Token' (capital T)
    const token = localStorage.getItem('Token');

    // 2. Build the headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // 3. Send the request with headers
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
