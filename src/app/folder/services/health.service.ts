import { Injectable } from '@angular/core';
import { HealthData } from '../interfaces/HealthData-Interface';
import { checkPermission, getHealthData, openAppSettings } from 'src/app/utils/health-plugin';

import { CheckPermissionResult } from "health-data";


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { 
  }

  async getPasos(): Promise<HealthData[]> {

    //codigo para obtener del Plugin la cantidad de pasos
    const res = await getHealthData();
  
    return [{
      name: res.name || "NO SENSOR NAME",
      value: res.count || 0
    }];
  }

  async getPermissionState(): Promise<CheckPermissionResult>{
    const permission = await checkPermission();
    return permission;
  }
  
  
}
