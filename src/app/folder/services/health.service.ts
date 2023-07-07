import { Injectable } from '@angular/core';
import { HealthData } from '../interfaces/HealthData-Interface';
import { checkPermission, getHealthData, openAppSettings } from 'src/app/utils/health-plugin';

import { CheckPermissionResult, HealthDataPlugin } from "health-data";
import { PermissionState } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {


  constructor() { }

  async getPasos(): Promise<HealthData[]> {

    await this.getHealthDataWithPermission();

    //codigo para obtener del Plugin la cantidad de pasos
    const res = await getHealthData();
  
    return [{
      name: res.name || "NO SENSOR NAME",
      value: res.count || 0
    }];
  }

  private getHealthDataWithPermission = async () => {
    const permission :CheckPermissionResult = await checkPermission();

    if (!permission.granted) {
      //Setting force to true causes the permission to be requested.
      const result:CheckPermissionResult = await HealthDataPlugin.checkPermission({ force: true });
      if (!result.granted) {
        throw new Error('Activity recognition permission not granted');
      }
    }
  };
  
  
}
