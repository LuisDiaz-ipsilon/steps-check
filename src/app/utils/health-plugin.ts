import {HealthDataPlugin} from "health-data";
import { HealthDataResponse } from "../folder/interfaces/HealthData-Interface";

export const getHealthData = async (): Promise<HealthDataResponse> => {
    const response: HealthDataResponse = await HealthDataPlugin.getSteps();
    console.log('health-plugin.ts testing response')
    return response;
};