import { Vehicle, VehicleTypeString } from "../model/Vehicle.js";

export const createVehicle = <Type extends VehicleTypeString>(type: Type) => {
	return new Vehicle<Type>(type);
};
export const getVehicles = (type: string) => {
	console.log(type);
};
