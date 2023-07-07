import {HealthDataPlugin} from "health-data";
import { CheckPermissionResult, HealthDataResponse } from "../folder/interfaces/HealthData-Interface";


export const getHealthData = async (): Promise<HealthDataResponse> => {
    const response: HealthDataResponse = await HealthDataPlugin.getSteps();
    return response;
};


export const checkPermission = async () :Promise<CheckPermissionResult> => {
    const response: CheckPermissionResult = await HealthDataPlugin.checkPermission();
    console.log("Permiso: "+response);
    return response
}

export const openAppSettings = async () : Promise<void> => {
    console.log("openAppSettings");
}


