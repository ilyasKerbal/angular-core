import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }

  resetProject(){
    const emptyProject: Project = {
      id: null,
      title: "",
      details: "",
      percentComplete: 0,
      approved: false
    };
    this.selectedProject = emptyProject;
  }

  saveProject(project: Project){
    if(project.id){
      this.updateProject(project);
    }else {
      this.createProject(project);
    }
  }

  createProject(project: Project){
    this.projectsService.add(project).subscribe(res => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project: Project){
    this.projectsService.update(project).subscribe(res => {
      this.getProjects();
      this.resetProject();
    });
  }

  getProjects(){
    this.projects = this.projectsService.all();
  }

  deleteProject(project){
    this.projectsService.delete(project.id).subscribe(res => {this.getProjects(); this.resetProject();});
  }

  selectProject(project){
    this.selectedProject = project;
  }

  cancel(){
    this.resetProject();
  }
}
