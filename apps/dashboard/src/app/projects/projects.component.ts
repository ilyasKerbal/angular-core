import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject;
  constructor() { }

  ngOnInit(): void {
  }

  selectProject(project){
    this.selectedProject = project;
  }

  cancel(){
    this.selectProject(null);
  }

}
