const tolls: { [key: string]: number } = {
	SM: 50,
	MD: 80,
	LG: 160,
	XL: 250,
};

type VehicleType = Car | Bus | Truck | Bike;
export type VehicleTypeString = "car" | "bus" | "truck" | "bike";
export type VehicleSize = "SM" | "MD" | "LG" | "XL";

export class Vehicle<T extends VehicleTypeString> {
	details?: VehicleType;
	toll: number;

	constructor(type: T) {
		if (type === "bike") this.details = new Bike();
		else if (type === "car") this.details = new Car();
		else if (type === "bus") this.details = new Bus();
		else if (type === "truck") this.details = new Truck();

		if (this.details) this.toll = tolls[this.details.size];
		else this.toll = 0;
	}
}

export class Bike {
	size = "SM";
}

export class Car {
	size = "MD";
}
export class Bus {
	size = "LG";
}
export class Truck {
	size = "XL";
}
