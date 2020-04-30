import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';

  links = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/customers', icon: 'face', title: 'Customers'},
    {path: '/projects', icon: 'folder', title: 'Projects'},
  ];
}
