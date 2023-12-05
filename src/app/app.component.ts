import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'health-connect', url: '/folder/health-connect', icon: 'paper-plane' },
    { title: 'Pasos', url: '/folder/steps', icon: 'mail' },
    { title: 'Info', url: '/folder/info', icon: 'paper-plane' },

  ];
  
  constructor() {}
}
