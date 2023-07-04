import { Injectable } from '@angular/core';
import { HealthData } from '../interfaces/HealthData-Interface';
import { getHealthData } from 'src/app/utils/health-plugin';


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  getPasos() :HealthData[]{

    //codigo para obtener del Plugin la cantidad de pasos
    getHealthData()

    return [{
      name: 'Pasos',
      value: 399
    }];
  }
}
