import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './Models/project.model';
import { error, log } from 'console';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private apiUrl = 'http://localhost:5038/api/Project';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);

  }

  addProject(project: Project) {
    return this.http.post(this.apiUrl, project);
  }
}
