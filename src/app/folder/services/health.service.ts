import { Injectable } from '@angular/core';
import { CheckPermissionResult, HealthConnect, HealthData, HealthDataResponse } from '../interfaces/HealthData-Interface';
import { checkPermission, echo, getHR/*checkPermission, getHealthConnect, getHealthData */} from 'src/app/utils/health-plugin';


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  async echos(): Promise<HealthDataResponse[]>{
    const res = await echo();
    return [{
      value :  res.value || 'Echo Testing'
    }];
  }

  getPasos() :HealthData[]{

    //codigo para obtener del Plugin 
    //getHealthData()

    return [{
      name: 'Pasos',
      value: 396
    }];
  }

  async getHR(): Promise<HealthConnect[]>{

    const res = await getHR();
    return [{
      hr: res.hr || 0
    }];

  }

  async getPermissionState(): Promise<CheckPermissionResult>{
    const permission = await checkPermission();
    console.log("Granted?: "+permission.granted)
    return permission;
  }
  

}
