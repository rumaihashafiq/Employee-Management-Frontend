import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login-component.html',
  styleUrls: ['./admin-login-component.css'],
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    // Temporary hardcoded login for testing
    if (username === 'admin' && password === 'admin123') {
      this.router.navigate(['/employeeDashboard']);
    } else {
      this.loginError = true;
    }
  }
}
