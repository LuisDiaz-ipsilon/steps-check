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

  constructor(private healthService: HealthService) { }

  ngOnInit() {

    this.echoT = this.healthService.echos();

    console.log("Solicitud de permiso")
    //this.healthService.getPermissionState();
    //console.log(this.healthService.getPermissionState());


    this.healthService.getHR().then(data => {
      this.hearRate = data;
    }).catch(error => {
      // handle error here
      console.error(error);
    });

  }

}
