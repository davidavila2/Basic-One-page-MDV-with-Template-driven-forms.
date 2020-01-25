import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) { }
  
  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      coolLevel: 0,
      name: '',
      description: '',
      intelligenceLevel: 0,
      maxSpeed: 0,
      importanceLevel: 0,
      tasteLevel: 0,
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

}
