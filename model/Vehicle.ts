export class Vehicle {
	size: string;
	toll: number = 0;
	tolls: { [key: string]: number } = {
		SM: 50,
		MD: 80,
		LG: 160,
		XL: 250,
	};

	constructor(size: string) {
		this.size = size;
		this.setToll(size);
	}

	setToll(size: string) {
		this.toll = this.tolls[size];
	}
}
