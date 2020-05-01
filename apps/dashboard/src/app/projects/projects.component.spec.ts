import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { Project } from '@workshop/core-data';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
  // Create my local test members
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  const emptyProject: Project = {
    id: null,
    title: "",
    details: "",
    percentComplete: 0,
    approved: false
  };
  //Instantiate Test Bed
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ProjectsRoutingModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
      ]
    }).createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges(); // Changes are not detected automatically
  });

  it('Should select a project', ()=>{
    component.selectProject(emptyProject);
    expect(component.selectedProject).toBe(emptyProject);
  });

  it('Should h1 color be red', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('green');
  });
});
