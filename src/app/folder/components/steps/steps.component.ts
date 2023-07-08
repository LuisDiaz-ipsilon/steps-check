import { Component, OnInit } from '@angular/core';

import { Color, ScaleType } from '@swimlane/ngx-charts';
import { HealthService } from '../../services/health.service';
import { CheckPermissionResult, HealthData } from '../../interfaces/HealthData-Interface';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent  implements OnInit {

  single : any;

  view: [number, number] = [0,400];
  max: number = 500;
  
  legend: boolean = true;
  legendPosition: any = 'below';

  colorScheme: Color = { 
    domain: ['#99CCE5', '#FF7F7F'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };

  onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  updateDataSteps(){
    this.healthService.getPasos().then(data => {
      this.single = data;
    }).catch(error => {
      // handle error here
      console.error(error);
    });
  }

  constructor(private healthService: HealthService) {
    //Object.assign(this, { single });
  }


  ngOnInit() {

    this.healthService.getPermissionState(); 


    this.healthService.getPasos().then(data => {
      this.single = data;
    }).catch(error => {
      // handle error here
      console.error(error);
    });
  }

}
