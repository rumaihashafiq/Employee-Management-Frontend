import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'; // or DashboardService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeedashboard-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeedashboard-component.html',
  styleUrls: ['./employeedashboard-component.css']
})
export class EmployeedashboardComponent implements OnInit {
  dashboardData: any[] = [];
  loading = true;
  error = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch dashboard data', err);
        this.error = 'Failed to load data from backend.';
        this.loading = false;
      }
    });
  }
}
