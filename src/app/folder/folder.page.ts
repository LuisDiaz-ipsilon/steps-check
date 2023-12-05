import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsComponent } from './components/steps/steps.component';
import { InfoComponent } from './components/info/info.component';
import { HealthConnectComponent } from './components/health-connect/health-connect.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
  }

  getComponent() {
    switch (this.folder) {
      case 'steps':
        return StepsComponent;
      case 'info':
        return InfoComponent;
      case 'health-connect':
        return HealthConnectComponent;
      default:
        return null;
    }
  }
  
}
