import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailsComponent } from './projects-details.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Project } from '@workshop/core-data';

describe('ProjectsDetailsComponent', () => {
  let component: ProjectsDetailsComponent;
  let fixture: ComponentFixture<ProjectsDetailsComponent>;

  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsDetailsComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailsComponent);
    component = fixture.componentInstance;
    component.currentProject = emptyProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
