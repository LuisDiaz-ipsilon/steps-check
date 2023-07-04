import { HealthDataPlugin } from "health-data"
import { HealthDataResponse } from "../folder/interfaces/HealthData-Interface";

export const getHealthData = async ()  => {
    const response: HealthDataResponse = await HealthDataPlugin.getSteps();
    console.log('capacitor-plugin-health: '+response.count); 
    return response;
};