export class Vehicle {
	toll: number = 0;

	collectToll(size: string) {
		const tolls: { [key: string]: number } = {
			SM: 50,
			MD: 80,
			LG: 160,
			XL: 250,
		};

		this.toll = tolls[size];
	}
}

export class Bike extends Vehicle {
	size = "SM";

	constructor() {
		super();
		this.collectToll(this.size);
	}
}

export class Car extends Vehicle {
	size = "MD";

	constructor() {
		super();
		this.collectToll(this.size);
	}
}
export class Bus extends Vehicle {
	size = "LG";

	constructor() {
		super();
		this.collectToll(this.size);
	}
}
export class Truck extends Vehicle {
	size = "XL";

	constructor() {
		super();
		this.collectToll(this.size);
	}
}
