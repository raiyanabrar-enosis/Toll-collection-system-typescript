import { Bike } from "../model/Bike.js";
import { Bus } from "../model/Bus.js";
import { Car } from "../model/Car.js";
import { Truck } from "../model/Truck.js";
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
