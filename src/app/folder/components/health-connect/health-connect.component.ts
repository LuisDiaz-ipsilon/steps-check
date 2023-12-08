import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../services/health.service';


@Component({
  selector: 'app-health-connect',
  templateUrl: './health-connect.component.html',
  styleUrls: ['./health-connect.component.scss'],
})
export class HealthConnectComponent  implements OnInit {

  hearRate: any = 1;
  mass: number = 1;
  sleep: string = 'Buena-testing';
  echoT: any = 'Echo TESTING'

  constructor(private healthService: HealthService) {  }

  ngOnInit() {

    this.healthService.echos().then(data => {
      this.echoT = data[0].value;
    }).catch(error => {
      // handle error here
      console.error(error);
    });

    this.healthService.getPermissionState().then(data => {
      console.log("data check permission: "+ data.granted)
    }).catch(error => {
      // handle error here
      console.error(error);
    });
    

    this.healthService.getHR().then(data => {
      this.hearRate = data[0].hr;
    }).catch(error => {
      // handle error here
      console.error(error);
    });

  }

}
