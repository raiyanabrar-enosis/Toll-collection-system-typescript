import { Bike, Car, Bus, Truck } from "../model/Vehicle.js";
export const createVehicle = (type) => {
    if (type === "bike")
        return new Bike();
    else if (type === "car")
        return new Car();
    else if (type === "bus")
        return new Bus();
    else if (type === "truck")
        return new Truck();
};
export const getVehicles = (type) => {
    console.log(type);
};
