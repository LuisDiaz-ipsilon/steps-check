import { Injectable } from '@angular/core';
import { HealthData } from '../interfaces/HealthData-Interface';


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor() { }

  getPasos() :HealthData[]{

    //codigo para obtener del Plugin

    return [{
      name: 'Pasos',
      value: 399
    }];
  }
}
