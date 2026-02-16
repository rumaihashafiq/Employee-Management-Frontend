import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../Models/employee.model';
import { Project } from '../Models/project.model';
import { EmployeeService } from '../employee.service';
import { ProjectService } from '../project.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-employeedashboard-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employeedashboard-component.html',
  styleUrl: './employeedashboard-component.css'
})
export class EmployeedashboardComponent implements OnInit {

  employee: Employee = {
    employeeId: '',
    name: '',
    email: '',
    department: '',
    dateOfjoining:'' ,
    isActive: true
  };

  projects: Project[] = [];

  newProject: Project = {
    projectName: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  constructor(
    private empService: EmployeeService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadEmployeeProfile();
    this.loadProjects();
  }

  loadEmployeeProfile() {
    this.empService.getMyProfile().subscribe(res => {
      console.log("EMPLOYEE API:", res);
      this.employee = res;
    });

  }





  updateProfile() {
    console.log("UPDATE PAYLOAD:", this.employee);
    this.empService.updateEmployee(this.employee).subscribe(() => {
      alert("Profile Updated Successfully!");
    });
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }

  addProject() {
    this.projectService.addProject(this.newProject).subscribe(() => {
      alert("Project Added Successfully!");
      this.loadProjects();
      this.newProject = { projectName:'', description:'', startDate:'', endDate:'' };
    });
  }
}
