import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeesignup-component',
  standalone: true, // Recommended for latest Angular versions
  imports: [RouterLink, FormsModule, CommonModule], // Note: HttpClient stays out of here
  templateUrl: './employeesignup-component.html',
  styleUrl: './employeesignup-component.css',
})
export class EmployeesignupComponent {

  // FIXED: Added HttpClient to the constructor
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

onSignup(form: NgForm) {
  if (form.valid) {
    this.http.post('http://localhost:5038/api/auth/signup', form.value)
      .subscribe({
        // 1. SUCCESS BLOCK
        next: (res) => {
          alert('Employee Registered Successfully!');
          this.router.navigate(['/employeelogin']);
        },

        // 2. ERROR BLOCK (Add the code here)
        error: (err) => {
          console.error('SERVER ERROR:', err); // This prints the detail to the F12 console

          if (err.status === 0) {
            // This handles the [object ProgressEvent] / Connection issue
            alert('Cannot connect to server. Is the API running and is CORS configured?');
          } else {
            // This handles actual errors from .NET (like 400 Bad Request or 401 Unauthorized)
            alert(err.error?.message || err.error || 'Signup failed.');
          }
        }
      });
  }
}
}
