import { HealthDataPlugin } from "health-data"
import { CheckPermissionResult, HealthDataResponse } from "../folder/interfaces/HealthData-Interface";

export const echo = async (): Promise<HealthDataResponse> => {
    console.log("Mensaje ECHO 2")
    let options = {value : "Hola"}
    const response: HealthDataResponse = await HealthDataPlugin.echo(options);
    console.log(response.value+" Del plugin")
    return response;
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


export const checkPermission = async (): Promise<CheckPermissionResult> => {
    const permission: CheckPermissionResult = await checkPermission();

    if (!permission.granted) {
            //Setting force to true causes the permission to be requested.
            const result: CheckPermissionResult = await HealthDataPlugin.checkPermission({ force: true });
            if (!result.granted) {
                throw new Error('Activity recognition permission not granted');
            }
        }
    return permission;
};*/