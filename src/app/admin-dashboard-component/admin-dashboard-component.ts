import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { ProjectService } from '../project.service';
import { Employee } from '../Models/employee.model';
import { Project } from '../Models/project.model';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard-component',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './admin-dashboard-component.html'
})

export class AdminDashboardComponent implements OnInit {

  employees: Employee[] = [];
  projects: Project[] = [];

  constructor(private empService: EmployeeService,
              private projectService: ProjectService, private cd:ChangeDetectorRef) {}

  ngOnInit() {

  // this.empService.getEmployees().subscribe((res: any[] = []) => {

  //   console.log("Employees API response:", res);

  //   this.employees = res.map(e => ({
  //     employeeId: e.id,
  //     name: e.name,
  //     email: e.email,
  //     department: e.department,
  //     isActive: true


  //   }));

  //   console.log("Mapped employees:", this.employees);
  //   this.employees.forEach(emp => console.log("Employee ID:", emp.employeeId));
  // });

  // PROJECTS
  this.projectService.getProjects().subscribe((res: any[] = []) => {

    console.log("Projects API response:", res);

    this.projects = res.map(p => ({
      projectId: p.projectId,
      projectName: p.projectName,
      description: p.description,
      startDate: p.startDate,
      endDate: p.endDate,
      duration: p.durationInDays
    }));
 this.cd.detectChanges();
    console.log("Mapped projects:", this.projects);
  });


    // this.empService.getEmployees().subscribe((res: Employee[]) => this.employees = res);
this.empService.getEmployees().subscribe((res: any[] = []) => {

  // Map 'id' from API to 'employeeId'
  this.employees = res.map(e => ({
    employeeId: e.id,
    name: e.name,
    email: e.email,
    department: e.department,
    dateOfjoining:e.dateOfJoining,
    isActive: e.isActive   // default value until backend provides it
  }));
 this.cd.detectChanges();
  console.log("Mapped employees:", this.employees);  // Verify IDs in console
});

    this.projectService.getProjects().subscribe((res: any[]) => {
      this.projects = res.map(p => ({
        ...p,
        duration: this.getDuration(p.startDate, p.endDate)
      }));
    });
  }

  getDuration(start: string, end: string) {
    return Math.ceil((new Date(end).getTime() - new Date(start).getTime()) / (1000*3600*24));
  }
  deleteEmployee(id: string) {
  this.empService.deleteEmployee(id).subscribe(() => {
    this.employees = this.employees.filter(e => e.employeeId !== id);
     this.cd.detectChanges();
  });
}
}
