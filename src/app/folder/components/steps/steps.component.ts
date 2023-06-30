import { Component, OnInit } from '@angular/core';

import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent  implements OnInit {


  view: [number, number] = [500, 250];
  legend: boolean = true;
  legendPosition: any = 'below';

  colorScheme: Color = { 
    domain: ['#99CCE5', '#FF7F7F'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };

  single = [
    {
      "name": "Germany",
      "value": 100
    }
  ];

  constructor() {
    //Object.assign(this, { this.single });
  }

  onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {}

}
