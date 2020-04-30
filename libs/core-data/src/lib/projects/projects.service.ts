import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = "projects";
  constructor(private httpClient: HttpClient) { }

  getUrl(){
    return `${BASE_URL}${this.model}`;
  }

  getUrlId(id){
    return `${BASE_URL}${this.model}/${id}`;
  }

  all(){
    return this.httpClient.get(this.getUrl());
  }

  add(project: Project){
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project: Project){
    return this.httpClient.patch(this.getUrlId(project.id), project);
  }

  delete(projectId){
    return this.httpClient.delete(this.getUrlId(projectId));
  }
}
