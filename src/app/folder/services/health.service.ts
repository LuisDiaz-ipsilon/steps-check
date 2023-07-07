import { Injectable } from '@angular/core';
import { HealthData } from '../interfaces/HealthData-Interface';
import { getHealthData } from 'src/app/utils/health-plugin';


@Injectable({
  providedIn: 'root'
})
export class HealthService {


  constructor() { }

  getPasos() :HealthData[]{

      getHealthData()

      return [{
        name : "Steps",
        value: 0
      }];

    
    
  }
  
}
