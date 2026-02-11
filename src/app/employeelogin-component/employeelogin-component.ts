import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {Router, RouterLink } from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms"

@Component({
  selector: 'app-employeelogin-component',
  imports: [RouterLink,CommonModule, FormsModule],
  templateUrl: './employeelogin-component.html',
  styleUrl: './employeelogin-component.css',
})
export class EmployeeloginComponent {
private apiUrl = 'http://localhost:5038/api/auth/login'; // Your .NET API URL

  constructor(private router: Router, private http: HttpClient) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      // The object keys (email, password) must match your .NET DTO class
      this.http.post(this.apiUrl, form.value).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          if (response.token) {
    localStorage.setItem('Token', response.token);
  } else if (response.Token) {
    localStorage.setItem('Token', response.Token);
  }
          // Usually you save a JWT token here: localStorage.setItem('token', response.token);
          this.router.navigate(['/employeeDashboard']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Invalid credentials or Server Error');
        }
      });
    }
  }
}
