import { Vehicle } from "../model/Vehicle.js";
export var createVehicle = function (type) {
    return new Vehicle(type);
};
export var getVehicles = function (type) {
    console.log(type);
};
