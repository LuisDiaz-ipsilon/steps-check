import { HealthDataPlugin } from "health-data"
import { CheckPermissionResult, HealthDataResponse } from "../folder/interfaces/HealthData-Interface";

export const echo = async (): Promise<HealthDataResponse> => {
    let options = {value : "Hola"}
    const response: HealthDataResponse = await HealthDataPlugin.echo(options);
    console.log(response.value)
    
    return response;
};

export const checkPermission = async (): Promise<CheckPermissionResult> => {
    let options = {force: true}
    console.log("Check permission plugin")
    const permission: CheckPermissionResult = await HealthDataPlugin.checkPermission(options);
    console.log("Check permission plugin" + permission)
    if (!permission.granted) {
            //Setting force to true causes the permission to be requested.
            const result: CheckPermissionResult = await HealthDataPlugin.checkPermission({ force: true });
            if (!result.granted) {
                throw new Error('Activity recognition permission not granted');
            }
        }
    return permission;
};

/*

export const getHealthData = async (): Promise<HealthDataResponse> => {
    const response: HealthDataResponse = await HealthDataPlugin.getSteps();
    return response;
};

export const getHealthConnect = async (): Promise<HealthDataResponse> => {
    const response: HealthDataResponse = await HealthDataPlugin.getHR();
    return response;
};

*/